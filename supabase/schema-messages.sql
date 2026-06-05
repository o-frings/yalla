-- Yalla — end-to-end encrypted direct messages. Run ONCE in the Supabase SQL editor, after schema-hardening.sql.
-- 1-on-1 only. The server stores ONLY ciphertext, IVs, salts and public keys — never plaintext, private
-- keys, or passphrases. See supabase/MESSAGING.md for the crypto design and its tradeoffs.

-- 0. helper: are two users friends? True if an *accepted* follows edge exists in EITHER direction.
--    Follows are liberal/non-reciprocal, so a single accepted edge (in either direction) is enough to
--    open a DM thread. Security definer so it can read follows past the directional read RLS.
create or replace function public.are_friends(a uuid, b uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.follows f
    where f.status = 'accepted'
      and ((f.follower = a and f.followee = b) or (f.follower = b and f.followee = a))
  );
$$;
grant execute on function public.are_friends(uuid, uuid) to authenticated;

-- 1. published identity public keys (ECDH P-256, raw base64). The matching private key NEVER leaves the
--    device, except inside the passphrase-wrapped blob in key_backups. Owner upserts their own; a friend
--    may read it to derive the shared conversation key. Replacing your key (new device, no backup) just
--    overwrites this row — old messages then become undecryptable for everyone (see MESSAGING.md).
create table if not exists public.e2e_keys (
  user_id    uuid primary key references auth.users on delete cascade,
  public_key text not null,
  updated_at timestamptz not null default now()
);
alter table public.e2e_keys enable row level security;

drop policy if exists "own key write" on public.e2e_keys;
create policy "own key write" on public.e2e_keys for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "read friend key" on public.e2e_keys;
create policy "read friend key" on public.e2e_keys for select
  using (auth.uid() = user_id or public.are_friends(auth.uid(), user_id));

-- 2. the messages. ciphertext/iv/salt are opaque to the server; only the sender and recipient can read
--    the row (RLS), and only the two of them ever hold the key to actually decrypt it.
create table if not exists public.direct_messages (
  id         bigint generated always as identity primary key,
  sender     uuid not null references auth.users on delete cascade,
  recipient  uuid not null references auth.users on delete cascade,
  ciphertext text not null,                 -- base64 AES-256-GCM ciphertext
  iv         text not null,                 -- base64, per-message random IV
  salt       text not null,                 -- base64, per-message random HKDF salt
  created_at timestamptz not null default now(),
  read_at    timestamptz,
  check (sender <> recipient)
);
alter table public.direct_messages enable row level security;
create index if not exists dm_pair_idx      on public.direct_messages (sender, recipient, created_at);
create index if not exists dm_recipient_idx on public.direct_messages (recipient, created_at desc);

drop policy if exists "read own dm" on public.direct_messages;
create policy "read own dm" on public.direct_messages for select
  using (auth.uid() = sender or auth.uid() = recipient);

-- only a friend may send, and only as themselves.
drop policy if exists "send dm" on public.direct_messages;
create policy "send dm" on public.direct_messages for insert
  with check (auth.uid() = sender and public.are_friends(sender, recipient));

-- the recipient may flip read_at (read receipts); nothing else is updatable.
drop policy if exists "mark read dm" on public.direct_messages;
create policy "mark read dm" on public.direct_messages for update
  using (auth.uid() = recipient) with check (auth.uid() = recipient);

-- either party may delete a message from the thread (unsend / clear).
drop policy if exists "delete own dm" on public.direct_messages;
create policy "delete own dm" on public.direct_messages for delete
  using (auth.uid() = sender or auth.uid() = recipient);

-- 3. opt-in passphrase-wrapped private-key backup. Owner-only. The wrapping key is derived from a
--    passphrase the server never sees (PBKDF2 client-side), so this blob is useless without it.
create table if not exists public.key_backups (
  user_id    uuid primary key references auth.users on delete cascade,
  salt       text not null,
  iv         text not null,
  wrapped    text not null,                 -- base64 AES-256-GCM of the exported private key (JWK)
  updated_at timestamptz not null default now()
);
alter table public.key_backups enable row level security;
drop policy if exists "own backup" on public.key_backups;
create policy "own backup" on public.key_backups for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 4. Realtime: stream new direct_messages (RLS still decides who receives each row). Guarded so the whole
--    script stays safely re-runnable.
do $$
begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'direct_messages') then
    alter publication supabase_realtime add table public.direct_messages;
  end if;
end $$;
