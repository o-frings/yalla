-- Security fixes from the October 2026 audit. Run once, in order, in the Supabase SQL editor.
-- The client-side halves are already shipped; these are the parts only the database can enforce.

-- ---------------------------------------------------------------------------
-- 1. (M1) Constrain avatar_color to a literal colour.
-- The client now validates on ingestion and escapes at the sink, so this is defence in depth —
-- it stops a hostile value being STORED at all, which also protects any future render site.
-- Clean existing rows first, or the ALTER fails on them.
-- NOTE: hsl() must stay allowed. avatarColor() mints hsl(<n>,55%,50%) and saveAvatar stores it,
-- so a hex-only rule would break saving for every user who never picked a swatch.
-- ---------------------------------------------------------------------------
update public.profiles set avatar_color = null
 where avatar_color is not null
   and avatar_color !~ '^(#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?|hsl\(\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}%\s*,\s*[0-9]{1,3}%\s*\))$';

alter table public.profiles drop constraint if exists avatar_color_fmt;
alter table public.profiles add constraint avatar_color_fmt
  check (avatar_color is null or avatar_color ~ '^(#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?|hsl\(\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}%\s*,\s*[0-9]{1,3}%\s*\))$');

-- ---------------------------------------------------------------------------
-- 2. (M3) Stop a message recipient rewriting what the sender said.
-- "mark read dm" granted UPDATE on the whole ROW (Postgres RLS has no column scope), and it is
-- permissive, so it ORs with "edit own dm". The recipient holds the same static ECDH secret, so they
-- can mint a valid AES-GCM blob for the thread: B updates A's row, and A's own client then renders
-- A's bubble with text A never wrote and no edit marker. Nothing in the app signs messages.
-- Replace the policy with a definer RPC that can only touch read_at.
-- RUN THIS BEFORE deploying a client that calls dm_mark_read.
-- STATUS: applied 2026-10-08; the client now calls dm_mark_read (app.js markRead).
-- ---------------------------------------------------------------------------
drop policy if exists "mark read dm" on public.direct_messages;

create or replace function public.dm_mark_read(p_sender uuid)
returns void language plpgsql security definer set search_path = '' as $$
begin
  update public.direct_messages set read_at = now()
   where recipient = auth.uid() and sender = p_sender and read_at is null;
end; $$;

grant execute on function public.dm_mark_read(uuid) to authenticated;

-- Do NOT "revoke update on direct_messages from authenticated" as a shortcut: RLS already filters,
-- and the revoke would also break "edit own dm", which senders legitimately use.

-- ---------------------------------------------------------------------------
-- 3. (M2) Bound reaction ciphertext. Defence in depth only — a short payload still fits — but it
-- removes the room for anything elaborate. schema-messages.sql uses CREATE TABLE IF NOT EXISTS, so
-- editing that file does nothing to a live database; this ALTER is the only thing that applies.
-- ---------------------------------------------------------------------------
alter table public.dm_reactions drop constraint if exists dm_reactions_ct_len;
alter table public.dm_reactions add constraint dm_reactions_ct_len check (length(ciphertext) < 512);

-- ---------------------------------------------------------------------------
-- 4. (M10) Record how hard each key backup was stretched.
-- New backups use 600k PBKDF2 iterations instead of 150k. The count has to be stored PER BACKUP:
-- raising it in place would make every existing backup undecryptable, and the app reports a failed
-- decrypt as "wrong passphrase" — which would send you hunting for a typo that never happened.
-- Existing rows keep the old count via the default, so they stay readable.
-- Downloaded backup FILES carry the same number inside the file itself; nothing to do for those.
-- ---------------------------------------------------------------------------
alter table public.key_backups add column if not exists iterations int not null default 150000;
