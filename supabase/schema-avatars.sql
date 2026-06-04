-- Yalla — social profile fields: custom avatars (colour + emoji/monogram + style) and presence
-- (last_seen → an "online now" dot). Run ONCE in the Supabase SQL editor, after
-- schema-hardening.sql / schema-live.sql / schema-suggestions.sql. Re-running is safe (idempotent).
-- These fields are surfaced through the friend-listing RPCs so a friend's chosen avatar and online
-- state show everywhere they appear (rail, hub, feed, live, profile). The client falls back to a
-- hashed-colour monogram / no-dot when they're null, so it works before this migration too.

-- 0. profile fields ----------------------------------------------------------
alter table public.profiles
  add column if not exists avatar_color text,        -- '#e8551c' (null → hashed default)
  add column if not exists avatar_emoji text,        -- a single emoji (null → initials monogram)
  add column if not exists avatar_icon  text,         -- a generative-art seed (overrides emoji/initials)
  add column if not exists avatar_style text,         -- 'solid' | 'gradient' | 'duotone' | 'ring'
  add column if not exists last_seen   timestamptz;  -- heartbeat → "online now" when recent

-- 1. enriched friend-listing RPCs. Return type changes, so drop then recreate. None of these
--    are referenced by RLS policies (they're definer helpers for the Friends UI), so this is safe.

drop function if exists public.incoming_requests();
create or replace function public.incoming_requests()
returns table(user_id uuid, display_name text, avatar_color text, avatar_emoji text, avatar_icon text, avatar_style text, last_seen timestamptz, created_at timestamptz)
language sql stable security definer set search_path = '' as $$
  select p.user_id, p.display_name, p.avatar_color, p.avatar_emoji, p.avatar_icon, p.avatar_style, p.last_seen, f.created_at
  from public.follows f join public.profiles p on p.user_id = f.follower
  where f.followee = auth.uid() and f.status = 'pending'
  order by f.created_at desc;
$$;
grant execute on function public.incoming_requests() to authenticated;

drop function if exists public.my_following();
create or replace function public.my_following()
returns table(user_id uuid, display_name text, avatar_color text, avatar_emoji text, avatar_icon text, avatar_style text, last_seen timestamptz, status text)
language sql stable security definer set search_path = '' as $$
  select p.user_id, p.display_name, p.avatar_color, p.avatar_emoji, p.avatar_icon, p.avatar_style, p.last_seen, f.status
  from public.follows f join public.profiles p on p.user_id = f.followee
  where f.follower = auth.uid()
  order by f.status, p.display_name;
$$;
grant execute on function public.my_following() to authenticated;

drop function if exists public.my_followers();
create or replace function public.my_followers()
returns table(user_id uuid, display_name text, avatar_color text, avatar_emoji text, avatar_icon text, avatar_style text, last_seen timestamptz, live boolean)
language sql stable security definer set search_path = '' as $$
  select p.user_id, p.display_name, p.avatar_color, p.avatar_emoji, p.avatar_icon, p.avatar_style, p.last_seen, f.live
  from public.follows f join public.profiles p on p.user_id = f.follower
  where f.followee = auth.uid() and f.status = 'accepted'
  order by p.display_name;
$$;
grant execute on function public.my_followers() to authenticated;

drop function if exists public.suggested_follows(int);
create or replace function public.suggested_follows(lim int default 12)
returns table(user_id uuid, display_name text, avatar_color text, avatar_emoji text, avatar_icon text, avatar_style text, last_seen timestamptz, visibility text, mutuals int, follows_you boolean)
language sql stable security definer set search_path = '' as $$
  with me as (select auth.uid() as id),
  myf as (
    select f.followee as uid from public.follows f, me
    where f.follower = me.id and f.status = 'accepted'
  ),
  excluded as (
    select f.followee as uid from public.follows f, me where f.follower = me.id
    union select id from me
  ),
  fof as (
    select f.followee as uid, count(distinct f.follower) as mutuals
    from public.follows f
    where f.follower in (select uid from myf) and f.status = 'accepted'
    group by f.followee
  ),
  followers as (
    select f.follower as uid from public.follows f, me
    where f.followee = me.id and f.status = 'accepted'
  ),
  pub as (
    select p.user_id as uid from public.profiles p where p.visibility = 'public'
  ),
  cand as (
    select uid, mutuals, false as fy from fof
    union all select uid, 0, true  from followers
    union all select uid, 0, false from pub
  ),
  agg as (
    select uid, max(mutuals) as mutuals, bool_or(fy) as follows_you
    from cand group by uid
  )
  select a.uid, p.display_name, p.avatar_color, p.avatar_emoji, p.avatar_icon, p.avatar_style, p.last_seen, p.visibility, a.mutuals::int, a.follows_you
  from agg a
  join public.profiles p on p.user_id = a.uid
  where a.uid not in (select uid from excluded)
  order by a.mutuals desc, a.follows_you desc, p.display_name
  limit greatest(1, least(lim, 50));
$$;
grant execute on function public.suggested_follows(int) to authenticated;
