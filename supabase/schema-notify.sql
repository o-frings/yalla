-- Yalla — follow notifications follow-up. Run ONCE in the Supabase SQL editor,
-- after schema-hardening.sql. Only change: request_follow now returns JSON
-- { status, id, name } so the client can push a notification to the followee.
-- (The social-notify Edge Function handles the actual push; no new tables/policies.)

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
