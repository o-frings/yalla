-- ============================================================================
-- Yalla — friends-only sharing hardening. Run ONCE in the Supabase SQL editor,
-- alongside the existing account/push/social schema (see ACCOUNTS.md).
-- Authoritative runnable version of supabase/SECURITY-HARDENING.md.
--
-- Model: LIBERAL viewing. A post is visible only to the author or an *accepted*
-- follower, and a viewer sees it at whatever level the sharer published. Your own
-- share level governs only what YOU publish. Public profiles auto-accept follows;
-- private profiles require the owner to accept. No reciprocity, no field redaction
-- → the feed read is pure RLS (no get_feed function needed).
-- ============================================================================

-- 0. profiles: visibility + a short shareable follow code --------------------
alter table public.profiles
  add column if not exists visibility  text not null default 'private'
    check (visibility in ('private','public')),
  add column if not exists follow_code text unique
    default upper(substr(md5(gen_random_uuid()::text), 1, 8));
update public.profiles
  set follow_code = upper(substr(md5(gen_random_uuid()::text), 1, 8))
  where follow_code is null;

-- 1. activity: informational level column = the sharer's chosen detail tier --
alter table public.activity
  add column if not exists level int not null default 1
    check (level between 1 and 3);

-- 2. follows: one table for public auto-accept AND private request/accept -----
create table if not exists public.follows (
  follower   uuid not null references auth.users on delete cascade,
  followee   uuid not null references auth.users on delete cascade,
  status     text not null default 'pending' check (status in ('pending','accepted')),
  created_at timestamptz not null default now(),
  primary key (follower, followee),
  check (follower <> followee)
);
alter table public.follows enable row level security;

drop policy if exists "read own edges"   on public.follows;
create policy "read own edges"   on public.follows for select
  using (auth.uid() = follower or auth.uid() = followee);
drop policy if exists "insert own follow" on public.follows;
create policy "insert own follow" on public.follows for insert
  with check (auth.uid() = follower);
drop policy if exists "followee updates"  on public.follows;        -- only the followee accepts
create policy "followee updates"  on public.follows for update
  using (auth.uid() = followee) with check (auth.uid() = followee);
drop policy if exists "delete own edge"   on public.follows;        -- unfollow / remove follower / decline
create policy "delete own edge"   on public.follows for delete
  using (auth.uid() = follower or auth.uid() = followee);

-- index the followee side of the graph: the PK (follower, followee) already covers
-- lookups by follower, but the feed/profile RLS and suggestions filter on followee,
-- which would otherwise seq-scan as the table grows.
create index if not exists follows_followee_status_idx on public.follows (followee, status);

-- auto-accept a follow when the followee is a public profile
create or replace function public.follows_autoaccept()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if exists (select 1 from public.profiles p
             where p.user_id = new.followee and p.visibility = 'public') then
    new.status := 'accepted';
  end if;
  return new;
end $$;
drop trigger if exists trg_follows_autoaccept on public.follows;
create trigger trg_follows_autoaccept before insert on public.follows
  for each row execute function public.follows_autoaccept();

-- 3. visibility predicate, reused by the cheers/comments policies -------------
create or replace function public.can_see_activity(aid uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.activity a
    where a.id = aid and (
      a.user_id = auth.uid()
      or exists (select 1 from public.follows f
                 where f.follower = auth.uid() and f.followee = a.user_id
                   and f.status = 'accepted')
    )
  );
$$;
grant execute on function public.can_see_activity(uuid) to authenticated;

-- 4. activity reads: self OR accepted follower (pure RLS, whole row) ----------
drop policy if exists "read feed" on public.activity;
drop policy if exists "read visible activity" on public.activity;
create policy "read visible activity" on public.activity for select
  using (
    auth.uid() = user_id
    or exists (select 1 from public.follows f
               where f.follower = auth.uid() and f.followee = user_id
                 and f.status = 'accepted')
  );
-- (insert own / delete own policies stay as in ACCOUNTS.md)

-- 5. cheers / comments: gate on visibility of the underlying post ------------
--    Only applies if the social schema (schema-social.sql) has been run; skipped
--    cleanly otherwise so this migration works with or without the social tables.
do $$
begin
  if to_regclass('public.cheers') is not null then
    execute 'drop policy if exists "read cheers" on public.cheers';
    execute 'create policy "read cheers" on public.cheers for select using (public.can_see_activity(activity_id))';
    execute 'drop policy if exists "insert own cheer" on public.cheers';
    execute 'create policy "insert own cheer" on public.cheers for insert with check (auth.uid() = user_id and public.can_see_activity(activity_id))';
  end if;
  if to_regclass('public.comments') is not null then
    execute 'drop policy if exists "read comments" on public.comments';
    execute 'create policy "read comments" on public.comments for select using (public.can_see_activity(activity_id))';
    execute 'drop policy if exists "insert own comment" on public.comments';
    execute 'create policy "insert own comment" on public.comments for insert with check (auth.uid() = user_id and public.can_see_activity(activity_id))';
  end if;
end $$;

-- 6. profiles read: public discoverable; private to self + accepted followers -
drop policy if exists "read all profiles" on public.profiles;
drop policy if exists "read profiles"     on public.profiles;
create policy "read profiles" on public.profiles for select
  using (
    visibility = 'public'
    or user_id = auth.uid()
    or exists (select 1 from public.follows f
               where f.follower = auth.uid() and f.followee = user_id
                 and f.status = 'accepted')
  );

-- 7. add a friend by their share code (resolves the code → inserts the edge) --
--    Definer so the follower can find a not-yet-friend without open profile reads.
--    Returns { status: not_found|self|following|requested, id, name } so the client can
--    fire a follow notification to the followee.
drop function if exists public.request_follow(text);
create or replace function public.request_follow(code text)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare target uuid; nm text; pub boolean;
begin
  select user_id, coalesce(display_name,'Friend'), (visibility = 'public')
    into target, nm, pub
    from public.profiles where follow_code = upper(trim(code));
  if target is null      then return jsonb_build_object('status','not_found'); end if;
  if target = auth.uid() then return jsonb_build_object('status','self');      end if;
  insert into public.follows(follower, followee) values (auth.uid(), target)
    on conflict (follower, followee) do nothing;          -- trigger auto-accepts if public
  return jsonb_build_object('status', case when pub then 'following' else 'requested' end,
                            'id', target, 'name', nm);
end $$;
grant execute on function public.request_follow(text) to authenticated;

-- 8. enriched lists for the Friends UI (definer: names of pending requesters
--    aren't otherwise readable until you've accepted them) ---------------------
create or replace function public.incoming_requests()
returns table(user_id uuid, display_name text, created_at timestamptz)
language sql stable security definer set search_path = '' as $$
  select p.user_id, p.display_name, f.created_at
  from public.follows f join public.profiles p on p.user_id = f.follower
  where f.followee = auth.uid() and f.status = 'pending'
  order by f.created_at desc;
$$;
grant execute on function public.incoming_requests() to authenticated;

create or replace function public.my_following()
returns table(user_id uuid, display_name text, status text)
language sql stable security definer set search_path = '' as $$
  select p.user_id, p.display_name, f.status
  from public.follows f join public.profiles p on p.user_id = f.followee
  where f.follower = auth.uid()
  order by f.status, p.display_name;
$$;
grant execute on function public.my_following() to authenticated;

-- 9. backfill activity.level from any rows that carried lvl in the JSONB ------
update public.activity set level = coalesce((summary->>'lvl')::int, 1) where true;

-- 10. friend suggestions ("people you may know") — defined in its own file so there
--     is a single authoritative copy. Run supabase/schema-suggestions.sql after this.
