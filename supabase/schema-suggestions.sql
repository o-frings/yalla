-- Yalla — friend suggestions ("people you may know"). Run ONCE in the Supabase SQL
-- editor, after schema-hardening.sql. Definer so it can walk the follow graph (which
-- is otherwise locked to your own edges) without exposing it to the client.
--
-- Sources, merged & de-duped per person:
--   • friends-of-friends — followed by people you follow (carries a mutual count;
--     private accounts only surface here, i.e. only when a mutual follows them)
--   • people who follow you but you don't follow back ("follows you")
--   • public profiles you don't follow yet
-- Excludes yourself and anyone you already follow or have requested.

create or replace function public.suggested_follows(lim int default 12)
returns table(user_id uuid, display_name text, visibility text, mutuals int, follows_you boolean)
language sql stable security definer set search_path = '' as $$
  with me as (select auth.uid() as id),
  myf as (   -- my accepted friends
    select f.followee as uid from public.follows f, me
    where f.follower = me.id and f.status = 'accepted'
  ),
  excluded as (   -- people i already follow/requested, plus myself
    select f.followee as uid from public.follows f, me where f.follower = me.id
    union select id from me
  ),
  fof as (   -- friends of friends, with mutual counts (always has >=1 mutual)
    select f.followee as uid, count(distinct f.follower) as mutuals
    from public.follows f
    where f.follower in (select uid from myf) and f.status = 'accepted'
    group by f.followee
  ),
  followers as (   -- people who follow me (accepted) but i may not follow back
    select f.follower as uid from public.follows f, me
    where f.followee = me.id and f.status = 'accepted'
  ),
  pub as (   -- public, discoverable profiles
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
  select a.uid, p.display_name, p.visibility, a.mutuals::int, a.follows_you
  from agg a
  join public.profiles p on p.user_id = a.uid
  where a.uid not in (select uid from excluded)
  order by a.mutuals desc, a.follows_you desc, p.display_name
  limit greatest(1, least(lim, 50));
$$;
grant execute on function public.suggested_follows(int) to authenticated;
