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

-- Throttle log for the social-notify Edge Function: one row per push it sends, used to
-- rate-limit (max 1 push per actor→recipient→kind per minute) so an accepted friend
-- can't replay the invoke to spam someone. Written only by the service-role function;
-- RLS is enabled with NO policies, so clients can neither read nor write it. The
-- send-reminders cron prunes rows older than 2 days.
create table if not exists public.notify_log (
  actor     uuid not null references auth.users on delete cascade,
  recipient uuid not null references auth.users on delete cascade,
  kind      text not null,
  sent_at   timestamptz not null default now()
);
alter table public.notify_log enable row level security;
create index if not exists notify_log_lookup_idx
  on public.notify_log (actor, recipient, kind, sent_at desc);
