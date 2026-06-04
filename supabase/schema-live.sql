-- Yalla — live workout sharing. Run ONCE in the Supabase SQL editor, after schema-hardening.sql.
-- Per-friend grants over the follows edge + a live_sessions table streamed via Realtime, RLS-gated.
-- See supabase/LIVE-SHARING.md for the design.

-- 1. per-follower live grant: the owner (followee) flips this on for chosen accepted followers.
alter table public.follows add column if not exists live boolean not null default false;

-- 2. one active live session per user; updated as sets are logged, closed on finish.
create table if not exists public.live_sessions (
  user_id    uuid primary key references auth.users on delete cascade,
  started_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  active     boolean not null default true,
  viewers    uuid[] not null default '{}',   -- per-session ad-hoc watchers chosen at go-live (beyond always-on grants)
  state      jsonb not null   -- { name, exName, doneSets, totalSets, mins, vol, mtot, ex:[{name,sets:[{w,r}]}], top }
);
alter table public.live_sessions enable row level security;
alter table public.live_sessions add column if not exists viewers uuid[] not null default '{}';   -- for existing deployments

drop policy if exists "own live" on public.live_sessions;
create policy "own live" on public.live_sessions for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- a viewer may READ a live session if the owner gave them a persistent grant (accepted follow +
-- follows.live) OR picked them as a one-off watcher for this session (auth.uid() in viewers).
drop policy if exists "watch granted live" on public.live_sessions;
create policy "watch granted live" on public.live_sessions for select using (
  auth.uid() = any(viewers)
  or exists (select 1 from public.follows f
             where f.follower = auth.uid() and f.followee = user_id
               and f.status = 'accepted' and f.live = true)
);

-- 3. your accepted followers + whether each is granted live (definer: you can't otherwise read the
--    profile of a follower you don't follow back). Used by the "Allow live" grant UI.
create or replace function public.my_followers()
returns table(user_id uuid, display_name text, live boolean)
language sql stable security definer set search_path = '' as $$
  select p.user_id, p.display_name, f.live
  from public.follows f join public.profiles p on p.user_id = f.follower
  where f.followee = auth.uid() and f.status = 'accepted'
  order by p.display_name;
$$;
grant execute on function public.my_followers() to authenticated;

-- 4. live cheers / comments during a session. Short-lived (the cron prunes them); the finished
--    workout's permanent cheers/comments still live on the `activity` row. A reaction is visible to
--    the owner and to anyone who can watch (persistent grant OR this session's picked viewers); only
--    a watcher may post one.
create table if not exists public.live_reactions (
  id         bigint generated always as identity primary key,
  owner      uuid not null references auth.users on delete cascade,   -- the broadcaster
  actor      uuid not null references auth.users on delete cascade,   -- the friend cheering / commenting
  kind       text not null check (kind in ('cheer','comment')),
  body       text check (char_length(body) between 1 and 240),        -- null for cheers
  created_at timestamptz not null default now()
);
alter table public.live_reactions enable row level security;
create index if not exists live_reactions_owner_idx on public.live_reactions (owner, created_at desc);

-- helper: may the current user watch the given owner's live session? True for a persistent live grant
-- OR for a one-off viewer the owner picked for their currently-active session.
create or replace function public.can_watch_live(owner_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.follows f
                 where f.follower = auth.uid() and f.followee = owner_id
                   and f.status = 'accepted' and f.live = true)
      or exists (select 1 from public.live_sessions s
                 where s.user_id = owner_id and s.active = true and auth.uid() = any(s.viewers));
$$;
grant execute on function public.can_watch_live(uuid) to authenticated;

drop policy if exists "read live reactions" on public.live_reactions;
create policy "read live reactions" on public.live_reactions for select
  using (owner = auth.uid() or public.can_watch_live(owner));

drop policy if exists "post live reaction" on public.live_reactions;
create policy "post live reaction" on public.live_reactions for insert
  with check (actor = auth.uid() and public.can_watch_live(owner));

-- 5. Realtime: stream live_sessions + live_reactions changes (RLS still decides who receives each row).
-- `alter publication … add table` errors if the table is already a member, so guard each add to
-- keep this whole script safely re-runnable.
do $$
begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'live_sessions') then
    alter publication supabase_realtime add table public.live_sessions;
  end if;
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'live_reactions') then
    alter publication supabase_realtime add table public.live_reactions;
  end if;
end $$;
