# Yalla sharing — security hardening (prep, not yet applied)

Status: **CLIENT IMPLEMENTED — SQL NOT YET APPLIED.** The runnable migration is
`supabase/schema-hardening.sql`. The client already ships the friends-only behaviour and
auto-detects whether this migration is live (it probes the `follows` table); until then it
publishes **summary-only** and hides the friends UI. Remaining step: run the migration in
the Supabase SQL editor, then everything activates automatically.

## Why this exists

`activity`'s current read policy is `auth.role() = 'authenticated'` (see `ACCOUNTS.md`),
so **every signed-in user can read every row's full `summary` JSONB**. There is no
friends boundary. The client now writes full exercise detail and (at Full level) actual
weights into that JSONB, and the audience rule is enforced **only in browser JS** —
trivially bypassed by hitting PostgREST with a captured JWT. This plan moves the
audience rule into Postgres.

## Model (decisions, locked)

**Sharing is liberal.** Only ONE axis controls visibility, enforced server-side:

| Axis | Controls | Mechanism |
|---|---|---|
| **Audience** | *whether* you see a post (and at what detail) | author is self, OR an `accepted` follow edge `you → author` exists. You then see the post **at the level the sharer published** (summary / detail / full). |

- **No reciprocity.** Your own share level governs **only what you publish**. You can see a
  friend's Full post even if you share nothing yourself. (This reverses the earlier
  "you only see what you share" rule — kept here for the record.)
- Because a viewer sees exactly what the sharer stored, **no per-viewer redaction is
  needed** → the feed read is **pure RLS**, no `SECURITY DEFINER` read function.
- **Profiles** are `private` (default) or `public`. Private follows are requests the owner
  must accept; public follows auto-accept. **Public is still follow-gated** — every view is
  backed by an explicit `accepted` edge, so there is never an "all authenticated" read path.
- The sharer's chosen detail tier is baked into the row at publish time (the client only
  writes weights/exercises into `summary` when the user is at the corresponding level), so
  the stored row already equals what any friend should see.

---

## SQL — run once in the Supabase SQL editor (review + test before prod)

> The only owner-privileged function is `can_see_activity()` (used by the cheers/comments
> policies). It is tiny, read-only, `set search_path = ''`, fully-qualified, no dynamic SQL,
> and derives the viewer from `auth.uid()`.

```sql
-- 0. profiles: profile visibility (private by default). -----------------------
--    No share_level column — viewing no longer depends on the viewer's own level.
alter table public.profiles
  add column if not exists visibility text not null default 'private'
    check (visibility in ('private','public'));

-- 1. activity: informational level column = the sharer's chosen detail tier ---
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
drop policy if exists "followee updates"  on public.follows;       -- only the followee accepts
create policy "followee updates"  on public.follows for update
  using (auth.uid() = followee) with check (auth.uid() = followee);
drop policy if exists "delete own edge"   on public.follows;       -- unfollow / remove follower
create policy "delete own edge"   on public.follows for delete
  using (auth.uid() = follower or auth.uid() = followee);

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

-- 4. activity reads: self OR accepted follower (pure RLS, no redaction) -------
--    The viewer sees exactly what the sharer published, so the whole row is fine.
drop policy if exists "read feed" on public.activity;
create policy "read visible activity" on public.activity for select
  using (
    auth.uid() = user_id
    or exists (select 1 from public.follows f
               where f.follower = auth.uid() and f.followee = user_id
                 and f.status = 'accepted')
  );
-- (insert own / delete own policies stay as in ACCOUNTS.md)

-- 5. cheers / comments: gate on visibility of the underlying post ------------
drop policy if exists "read cheers"      on public.cheers;
create policy "read cheers"      on public.cheers for select
  using (public.can_see_activity(activity_id));
drop policy if exists "insert own cheer" on public.cheers;
create policy "insert own cheer" on public.cheers for insert
  with check (auth.uid() = user_id and public.can_see_activity(activity_id));

drop policy if exists "read comments"      on public.comments;
create policy "read comments"      on public.comments for select
  using (public.can_see_activity(activity_id));
drop policy if exists "insert own comment" on public.comments;
create policy "insert own comment" on public.comments for insert
  with check (auth.uid() = user_id and public.can_see_activity(activity_id));

-- 6. profiles read: public discoverable; private to self + accepted followers -
drop policy if exists "read all profiles" on public.profiles;
create policy "read profiles" on public.profiles for select
  using (
    visibility = 'public'
    or user_id = auth.uid()
    or exists (select 1 from public.follows f
               where f.follower = auth.uid() and f.followee = user_id
                 and f.status = 'accepted')
  );

-- 7. backfill (safe to run repeatedly) ---------------------------------------
update public.activity set level = coalesce((summary->>'lvl')::int, 1) where true;
```

---

## Client integration map (`index.html`) — by stable anchor (line numbers drift)

> Do **not** start these until the SQL above is live in Supabase. Apply in this order.

1. **Publish a real `level` column** — anchor `sb.from("activity").insert({ user_id:cloudUser.id, kind:"workout", summary }` (in `cloudPublish`): add `level: lvl` to the insert object. Same for the `kind:"rings"` insert in `shareRingsClosed`: add `level:1`. (`summary.lvl` can stay — harmless.)
2. **Feed read is UNCHANGED** — anchor `sb.from("activity").select("id,user_id,created_at,summary")...limit(30)` (in `renderFeed`): keep the query as-is; the new RLS policy makes it return self + accepted-friends' rows only. **Remove the client-side reciprocity logic**, since viewing no longer depends on your own level:
   - Drop the `myLvl<1` locked-state — non-sharers can now browse the feed.
   - Change the displayed detail from `min(myLvl, s.lvl)` to just `s.lvl` (the sharer's level). `canOpen`/detail affordances should key off whether `s.ex` is actually present.
3. **Profile visibility upsert** — when the new public/private toggle changes, `sb.from("profiles").upsert({ user_id:cloudUser.id, visibility:'public'|'private' })` (mirror the existing upsert at the `acctName` `onchange` handler). **No `share_level` upsert** — the server doesn't use it.
4. **New UI (net-new, no anchor):**
   - Public/Private profile toggle in the Account box (writes `profiles.visibility`).
   - A **Friends** surface: incoming follow requests (accept/decline → update `follows.status`), people you follow, and an invite/add path (by email or share-code) so discovery never needs open profile browsing.
   - Wire request/accept/unfollow to the `follows` table; degrade gracefully if the tables aren't present (mirror the try/catch style already used for cheers/comments).
5. **Docs:** update `ACCOUNTS.md` (the "never raw weights" / "all authenticated read" notes are superseded by this model).

## Edge function

- `supabase/functions/social-notify/index.ts` (anchor `from("activity").select("user_id, summary")`): before sending a push, verify an `accepted` follow edge `actor → owner` exists; skip otherwise. Today it notifies on any `activityId`.

---

## Rollout order (non-negotiable)

1. Apply the SQL (schema → functions → policies) in Supabase; run the verification suite below in a staging project first.
2. Backfill `activity.level` (step 7).
3. Ship the client (integration steps 1–4). On next launch it upserts each user's `visibility` to `profiles`.
4. Only after the above: allow the client to publish level-2/3 payloads (exercises/weights). **Never publish detail before the new `activity` read policy is live**, or full payloads would still be world-readable in the window between.

## Verification suite (proves it's safe)

Run as several test users with different visibility / follow states:

- [ ] Direct `GET /rest/v1/activity?select=*` returns **only your own + accepted-friends'** rows (strangers → none).
- [ ] A friend's Full post is fully visible (incl. weights) to an accepted follower **even if the follower shares nothing** (level 0) — liberal viewing works.
- [ ] A non-follower cannot read/cheer/comment a user's post via direct PostgREST calls.
- [ ] A **private** profile's posts are invisible until the owner accepts the follow request.
- [ ] A **public** profile's posts become visible immediately after following (auto-accept), but still require the follow edge (no edge → no posts).
- [ ] Direct `GET /rest/v1/profiles` returns public profiles + your own + accepted-followees only.
- [ ] Pre-migration rows (no `level`) load fine; `level` backfills to 1 (or `summary.lvl`).

## Open build items (largest first)

- Follow/request/accept + invite UI in `index.html` (most net-new work).
- Public/private toggle + first-launch `profiles` upsert of `visibility`.
- Remove client-side reciprocity (locked-state, `min()` clamp) from `renderFeed`.
- `social-notify` friendship check.
- `ACCOUNTS.md` rewrite to the new model.
```
