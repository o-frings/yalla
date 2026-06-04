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
  state      jsonb not null   -- { name, exName, doneSets, totalSets, mins, vol, mtot, ex:[{name,sets:[{w,r}]}], top }
);
alter table public.live_sessions enable row level security;

drop policy if exists "own live" on public.live_sessions;
create policy "own live" on public.live_sessions for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- a viewer may READ a live session only if the owner granted them live access (accepted follow + live)
drop policy if exists "watch granted live" on public.live_sessions;
create policy "watch granted live" on public.live_sessions for select using (
  exists (select 1 from public.follows f
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

-- 4. Realtime: stream live_sessions changes (RLS still decides who receives each row).
alter publication supabase_realtime add table public.live_sessions;
