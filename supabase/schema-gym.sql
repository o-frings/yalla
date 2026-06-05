-- ============================================================================
-- Yalla — "Train together": friends physically at the same gym share a short
-- code and see each other on the Workout screen. Run ONCE in the Supabase SQL
-- editor, after schema-hardening.sql / schema-avatars.sql. Re-running is safe.
--
-- Model: a check-in writes a short code + timestamp onto your own profile. Two
-- people are "training together" when they hold the SAME active code (set within
-- the last 4h) AND have an accepted follow edge (either direction). Only friends
-- ever see your check-in; the 4h window means a forgotten check-in expires on its
-- own. The client falls back to the feature being off when these aren't migrated.
-- ============================================================================

-- 0. profile fields ----------------------------------------------------------
alter table public.profiles
  add column if not exists gym_code  text,         -- current gym/session code (null → not checked in)
  add column if not exists gym_since timestamptz;  -- when the current check-in started

-- 1. set or clear my check-in. Empty/blank code clears it. Codes are uppercased
--    and trimmed so "abc 12" and "ABC12" collide as the same gym. ------------
drop function if exists public.set_gym_checkin(text);
create or replace function public.set_gym_checkin(p_code text)
returns void language plpgsql security definer set search_path = '' as $$
declare c text := nullif(upper(regexp_replace(coalesce(p_code,''), '\s', '', 'g')), '');
begin
  update public.profiles
    set gym_code  = c,
        gym_since = case when c is null then null else now() end
    where user_id = auth.uid();
end $$;
grant execute on function public.set_gym_checkin(text) to authenticated;

-- 2. friends checked in to the SAME code as me, within the last 4h ------------
--    Definer so a friend's avatar/name resolve the same way they do elsewhere.
drop function if exists public.gym_buddies();
create or replace function public.gym_buddies()
returns table(user_id uuid, display_name text, avatar_color text, avatar_emoji text,
              avatar_icon text, avatar_style text, last_seen timestamptz, gym_since timestamptz)
language sql stable security definer set search_path = '' as $$
  with me as (
    select gym_code, gym_since from public.profiles where user_id = auth.uid()
  )
  select p.user_id, p.display_name, p.avatar_color, p.avatar_emoji, p.avatar_icon,
         p.avatar_style, p.last_seen, p.gym_since
  from public.profiles p, me
  where me.gym_code is not null
    and me.gym_since > now() - interval '4 hours'
    and p.gym_code = me.gym_code
    and p.gym_since > now() - interval '4 hours'
    and p.user_id <> auth.uid()
    and exists (
      select 1 from public.follows f
      where f.status = 'accepted'
        and ( (f.follower = auth.uid() and f.followee = p.user_id)
           or (f.follower = p.user_id  and f.followee = auth.uid()) )
    )
  order by p.gym_since desc;
$$;
grant execute on function public.gym_buddies() to authenticated;
