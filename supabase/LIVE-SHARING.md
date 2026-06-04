# Yalla — live workout sharing (design, not yet built)

Status: **APPROVED SCOPE, NOT IMPLEMENTED.** Decisions locked 2026-06-04:
- **Audience:** per-friend grant — you allow specific accepted followers to watch (a permanent allow-list).
- **Detail:** full live detail — current exercise, sets/reps/weight as logged, elapsed time.
- **Transport:** Supabase Realtime (sub-second), RLS-gated.

Builds on the friends system (`follows`) from `schema-hardening.sql`. Land this **after** the
`harden-edge-functions-and-schema` branch merges, to avoid schema collisions.

## Model

- **Grant** = a property of the existing follow edge: the owner (followee) flips `live=true` on a
  specific accepted follower's edge. Reuses `follows`; no new join table. The existing "followee
  updates" RLS policy already lets the owner edit their followers' edges.
- **Live session** = one current row per user in `live_sessions`, opened when a workout starts,
  updated as sets are logged, closed (active=false) on finish/leave.
- **Visibility** = a viewer may read a live session only if they hold a `live=true` accepted edge to
  the owner. Enforced by RLS, so it holds over Realtime too.

## SQL (`supabase/schema-live.sql` — to be written)

```sql
-- 1. per-follower live-watch grant (owner = followee toggles it)
alter table public.follows add column if not exists live boolean not null default false;

-- 2. one active live session per user
create table if not exists public.live_sessions (
  user_id    uuid primary key references auth.users on delete cascade,
  started_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  active     boolean not null default true,
  state      jsonb not null   -- { name, exName, exIdx, doneSets, totalSets, mins, sets:[{w,r}], top }
);
alter table public.live_sessions enable row level security;

drop policy if exists "own live" on public.live_sessions;
create policy "own live" on public.live_sessions for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- a viewer may READ a live session only if the owner granted them live access
drop policy if exists "watch granted live" on public.live_sessions;
create policy "watch granted live" on public.live_sessions for select using (
  exists (select 1 from public.follows f
          where f.follower = auth.uid() and f.followee = user_id
            and f.status = 'accepted' and f.live = true)
);

-- 3. Realtime: stream changes (RLS still applies to who receives them)
alter publication supabase_realtime add table public.live_sessions;
```

> **Manual step (you):** in the Supabase dashboard, confirm Realtime is enabled for `live_sessions`
> (Database → Replication / Realtime). The `alter publication` above does it via SQL; verify it stuck.

## Client (`index.html`)

**Broadcaster** (in the workout flow):
- A master setting "Share my workouts live" + the per-friend grants make it automatic ("permanent").
- On workout start (or first set), `upsert live_sessions {user_id, active:true, state}`.
- On each set logged / exercise change, throttle-update `state` + `updated_at` (~every few seconds).
- On Finish / leaving the workout / inactivity timeout, set `active:false` (or delete the row).
- Show a subtle "● sharing live" chip while broadcasting.

**Viewer:**
- Per-friend **"Allow live"** toggle in the Following list → `update follows set live=… where follower=<them> and followee=me`. (You grant; gear/long-press on a follower.)
- Feed shows a **🔴 Live** entry for any granted friend whose `live_sessions.active` is true (RLS returns only allowed rows).
- Tapping opens a **live view** sheet: current exercise, sets so far (w×r), elapsed, the rose so far —
  subscribed via `sb.channel(...).on('postgres_changes', {table:'live_sessions', filter:'user_id=eq.<id>'})`.
- Auto-close the view when `active` flips false.

**Detail level:** live view shows weights (full detail), consistent with the per-post sharing model —
arguably only meaningful for friends you've explicitly granted, so full detail is fine here.

## Build order

1. Land the `harden-edge-functions-and-schema` branch (avoid schema churn).
2. Run `schema-live.sql`; verify Realtime on `live_sessions`.
3. Client: grants toggle → broadcaster hooks in the workout flow → viewer sheet + feed live indicator.
4. Verify: a granted friend sees your live session update in realtime; a non-granted friend's direct
   `select * from live_sessions` returns nothing; closing the workout ends the live view.

## Open questions before building
- Master "go live" toggle, or auto-live whenever you have ≥1 grant? (assumed: master toggle + grants)
- Idle/stale handling: auto-end a live session after N minutes without updates (avoid "stuck live").
