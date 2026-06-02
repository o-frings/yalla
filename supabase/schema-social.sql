-- Yalla social — cheers + comments on shared workouts.
-- Run once in the Supabase SQL Editor (alongside the account + push schema).

-- A "cheer" (like). One per user per activity.
create table if not exists public.cheers (
  activity_id uuid not null references public.activity on delete cascade,
  user_id     uuid not null references auth.users on delete cascade,
  created_at  timestamptz not null default now(),
  primary key (activity_id, user_id)
);
alter table public.cheers enable row level security;
drop policy if exists "read cheers"   on public.cheers;
drop policy if exists "insert own cheer" on public.cheers;
drop policy if exists "delete own cheer" on public.cheers;
create policy "read cheers"      on public.cheers for select using (auth.role() = 'authenticated');
create policy "insert own cheer" on public.cheers for insert with check (auth.uid() = user_id);
create policy "delete own cheer" on public.cheers for delete using (auth.uid() = user_id);

-- A comment on an activity.
create table if not exists public.comments (
  id          uuid primary key default gen_random_uuid(),
  activity_id uuid not null references public.activity on delete cascade,
  user_id     uuid not null references auth.users on delete cascade,
  body        text not null check (char_length(body) between 1 and 240),
  created_at  timestamptz not null default now()
);
alter table public.comments enable row level security;
drop policy if exists "read comments"     on public.comments;
drop policy if exists "insert own comment" on public.comments;
drop policy if exists "delete own comment" on public.comments;
create policy "read comments"      on public.comments for select using (auth.role() = 'authenticated');
create policy "insert own comment" on public.comments for insert with check (auth.uid() = user_id);
create policy "delete own comment" on public.comments for delete using (auth.uid() = user_id);
