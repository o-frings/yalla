-- Yalla push reminders — table + security.
-- Run this once in the Supabase SQL Editor (see PUSH-SETUP.md).

create table if not exists public.push_subscriptions (
  user_id          uuid primary key references auth.users on delete cascade,
  subscription     jsonb not null,                       -- the browser PushSubscription (endpoint + keys)
  reminders_on     boolean not null default true,
  last_workout_at  timestamptz,                          -- updated by the app whenever a workout is saved
  last_reminded_at timestamptz,                           -- set by the cron so we don't nag repeatedly
  updated_at       timestamptz not null default now()
);

-- Row-level security: each user can only see / change their own subscription.
-- The scheduled function uses the service-role key, which bypasses RLS.
alter table public.push_subscriptions enable row level security;

drop policy if exists "own subscription" on public.push_subscriptions;
create policy "own subscription" on public.push_subscriptions
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
