# Yalla accounts & sync — design + setup

How Yalla goes from "data lives only on this phone" to "log in, sync across your
devices, and see what friends are doing" — without giving up the offline-first,
instant feel, and built so it can scale to a public/commercial product later.

Backend: **Supabase** (hosted Postgres + auth). GitHub Pages still serves the app;
it just talks to Supabase over the network. No server to run.

---

## Guiding principles

1. **Offline-first stays.** `localStorage` remains the live store the app reads/writes
   instantly. Supabase is a *sync layer* on top, not the source of truth at read time.
   The app works exactly as today with no network.
2. **Private by default.** Every row of personal data is readable only by its owner.
   Sharing is an explicit, opt-in exception — never the default. (This is the one
   choice that's painful to reverse later, so we bake it in from day one.)
3. **Private data ≠ shared data.** Your detailed log (weights, reps, history) stays
   locked to you. Friends only ever see *summaries you chose to publish*, stored in a
   separate table.
4. **Feature-flagged.** With no Supabase keys configured, the app behaves 100% like
   today (pure local). Set the keys and the cloud layer turns on. Nothing about the
   current app breaks while this is being built.

---

## Data model

Current storage keys (all per-device today): `settings`, `plans`, `lastsets`,
`bodyweight`, `history`, `extlog`, `draft`.

### Table 1 — `user_data` (private personal data, one row per key)

Maps 1:1 onto the existing `sget`/`sset` calls. Last-write-wins per key via `updated_at`.

```sql
create table public.user_data (
  user_id    uuid not null references auth.users on delete cascade,
  key        text not null,
  value      jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

alter table public.user_data enable row level security;

-- Owner-only: you can read/write ONLY your own rows. This is the security boundary.
create policy "own rows" on public.user_data
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
```

### Table 2 — `profiles` (display name, so friends see a name not a UUID)

```sql
create table public.profiles (
  user_id      uuid primary key references auth.users on delete cascade,
  display_name text,
  created_at   timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Base policy (superseded by the hardening migration, which scopes reads to public
-- profiles + self + accepted followers and adds visibility + follow_code columns).
create policy "read all profiles"  on public.profiles for select using (auth.role() = 'authenticated');
create policy "write own profile"  on public.profiles for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

### Table 3 — `activity` (the shared feed — opt-in, friends-only)

This table holds what a user *chose* to publish at their chosen detail level: a summary
("trained Push — 18 sets"), and at higher levels the exercise list and (at Full) the
weights lifted. **Visibility is friends-only** — see the hardening migration below.

```sql
create table public.activity (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users on delete cascade,
  created_at timestamptz not null default now(),
  kind       text not null,         -- e.g. 'workout'
  summary    jsonb not null,        -- derived payload; detail depends on the sharer's level
  level      int not null default 1 -- 1 summary / 2 +sets·reps / 3 +weights (added by hardening)
);

alter table public.activity enable row level security;
create policy "insert own"    on public.activity for insert with check (auth.uid() = user_id);
create policy "delete own"    on public.activity for delete using (auth.uid() = user_id);
-- READ policy is set by the hardening migration (friends-only) — NOT auth.role()='authenticated'.
```

> **⚠️ Hardening is mandatory before sharing exercise/weight detail.** The original
> "any signed-in user can read the feed" policy is **unsafe** now that posts can carry
> weights — see **`supabase/schema-hardening.sql`** (rationale in `SECURITY-HARDENING.md`).
> It adds a `follows` table, public/private profiles, and a friends-only read policy
> (`self OR accepted follower`). The client auto-detects whether that migration is live and
> publishes **summary-only** until it is, so detail never lands in a world-readable table.

---

## Auth

**Email magic-link (passwordless).** Simplest for users, no passwords to manage or
reset, fewest support headaches — and it scales fine to a public product. The login
UI is two Supabase calls (`signInWithOtp`, `signOut`). Lives in the **Me** section.

`user_id` (a stable UUID from `auth.users`) is the key for everything. We never key
data on email — emails change.

---

## Sync model (offline-first, last-write-wins per key)

- `localStorage` stays the live store → app is instant and works offline.
- `sset(k,v)`: write localStorage immediately, stamp `updated_at = now()` locally,
  mark the key dirty, debounce-push the upsert to `user_data`.
- On launch + on reconnect: **reconcile** — pull all `user_data` rows, compare each
  `updated_at` against the local stamp, newest wins, write winners into localStorage,
  re-render.
- Track per-key timestamps in a local `_syncMeta` map.

**Conflict policy:** last-write-wins per key. If you genuinely edit two devices while
both are offline, the later save wins and the earlier can be lost. For one person
across their own devices this is rare and acceptable; proper per-record merging isn't
worth it here.

---

## Sharing flow (the feed)

- A `settings.shareActivity` flag (default on for the friends circle, user can turn off).
- On workout save, if sharing is on, append one derived summary row to `activity`.
- A **Friends** view reads recent `activity` rows, joins `profiles` for display names,
  shows a simple feed ("Sam — Push, 18 sets, 2h ago").
- No raw training data leaves `user_data`.

---

## GDPR / data rights (cheap now, legally required for a public EU product)

- **Export:** already exists (encrypted backup in Me → Export).
- **Delete my data:** RLS lets a user delete their own `user_data`/`activity`/`profiles`
  rows from the client. Full `auth.users` deletion needs an admin/edge-function step —
  stub the button now, wire the edge function when going public.
- Keep a short privacy note describing what's stored and shared.

---

## Cost

Free tier covers a friends-only group comfortably. Paid plans start when you outgrow
it — same project, no re-architecture. Postgres data is fully exportable, so no lock-in.

---

## Setup — what YOU do (one time, ~15 min of click-ops)

1. Go to <https://supabase.com> → sign up → **New project**.
   - Pick a name, a strong DB password (save it), and a region near your users (EU).
2. In the project, open **SQL Editor** → paste the three `create table …` blocks above
   (all of them, in order) → **Run**.
3. Open **Project Settings → API**. Copy two values:
   - **Project URL** (looks like `https://abcd1234.supabase.co`)
   - **anon / public key** (a long string labeled "anon public")
4. Send me those two values, or paste them into the config block at the top of
   `index.html` (I'll show you exactly where).
5. **Authentication → URL Configuration** (required, or magic-link login fails):
   - **Site URL** = your live app URL, e.g. `https://YOUR-USERNAME.github.io/yalla/`
   - **Redirect URLs** = add the same URL (plus any local test origin you use).
   - Note: Supabase's built-in email sender is rate-limited (a few/hour) and may land
     in spam — fine for testing; add an SMTP provider later for real friend use.

> **Is the anon key a secret?** No. The anon/public key is *designed* to be embedded
> in client-side code and shipped publicly. Security is enforced by the row-level
> security policies above, not by hiding the key. It's safe to commit to the repo.

Once those two values exist, I build the client side: auth screen, the sync rewrite,
and the feed — all behind the feature flag so the current app is never disrupted.

---

## Social — cheers & comments (optional)

Lets friends 🔥 and comment on each other's shared workouts, with an optional
push to the post's owner.

1. **Tables + RLS:** run [`supabase/schema-social.sql`](supabase/schema-social.sql)
   in the SQL Editor (creates `cheers` and `comments`, each readable by any
   signed-in user, writable only by its author).
2. **Push on cheer/comment (optional):** deploy the
   [`social-notify`](supabase/functions/social-notify/index.ts) Edge Function
   (same VAPID secrets as the reminders function in PUSH-SETUP.md). The app
   calls it after a cheer/comment; it looks up the post owner and, if they have
   a push subscription, sends them a notification. Self-actions are ignored.

The app degrades gracefully: if these tables/function aren't deployed, the feed
still works — cheer/comment just no-op with a gentle toast.
