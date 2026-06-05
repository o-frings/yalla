# Yalla — end-to-end encrypted direct messages

1-on-1 text messaging between friends. Messages are encrypted **on the device** before they ever touch
Supabase; the server stores only ciphertext. Run `supabase/schema-messages.sql` once (after
`schema-hardening.sql`) to provision it.

## Threat model

- **The server never sees plaintext.** Postgres / Supabase / anyone with a DB dump sees only AES-GCM
  ciphertext, random IVs/salts, and ECDH **public** keys.
- **The server never sees a private key or a passphrase.** Private keys live in the browser's IndexedDB.
  The optional cloud backup stores the private key *wrapped* (PBKDF2 → AES-GCM) under a passphrase that is
  never transmitted.
- RLS still gates *metadata*: who-messaged-whom and timestamps are visible to the two participants only,
  and a row can only be inserted by a friend (an accepted `follows` edge in either direction).

This is **not** the Signal protocol. There is no forward secrecy and no post-compromise security (see
Tradeoffs). It is "good enough for friends" E2E: a server compromise or DB leak cannot read your messages.

## Keys

Each user has one **ECDH P-256 identity keypair**, generated on first use:

- **private key** → IndexedDB store `yalla-e2e` (key `idkey`), as an extractable JWK. Never synced, never
  uploaded except inside the wrapped backup blob.
- **public key** → `e2e_keys.public_key` (raw, base64). Readable by friends (RLS), so they can derive the
  shared secret to talk to you.

## Per-message encryption

Static ECDH between the two identity keys gives a shared secret that **both** parties can compute
independently (no key exchange messages, no server-side key escrow):

```
shared   = ECDH(my_private, their_public)          # identical on both sides
msgKey   = HKDF-SHA256(shared, salt, info="yalla-dm-v1")   # AES-256 key, per message
cipher   = AES-256-GCM(msgKey, iv, plaintext)
```

Each message carries its own random 16-byte `salt` and 12-byte `iv`, stored alongside the ciphertext. The
recipient (and the sender, reading their own thread) recomputes the same `shared`, re-derives `msgKey` from
the stored salt, and decrypts. The shared secret is cached in memory per friend for the session.

## Cross-device & backup

The private key is device-local, so a fresh device/browser starts with **no** key.

- **With backup (recommended):** the user sets a *message passphrase*. We export the private key (JWK),
  encrypt it with PBKDF2(passphrase) → AES-GCM, and store the blob in `key_backups`. A new device restores
  the **same** keypair from that blob → full history stays readable.
- **Without backup:** a new device generates a **new** keypair and overwrites `e2e_keys`. Going forward
  messaging works once friends re-fetch the new public key, but **all prior messages become undecryptable**
  (the old private key, and thus the old shared secrets, are gone). The UI renders these as
  `🔒 can't decrypt (key changed)` rather than erroring.

> ⚠️ **Forget the passphrase with no device still holding the key = history is unrecoverable.** This is
> inherent to real E2E; the server cannot help. The setup UI warns about this.

## Tradeoffs (intentional, for a friends hobby app)

- **No forward secrecy.** A static shared secret means compromise of one identity private key exposes the
  whole thread with that friend (past and future). Acceptable here; revisit with a ratchet if this ever
  goes commercial.
- **Key rotation breaks history** unless restored from backup (above).
- **Metadata is not hidden** from the server (sender, recipient, timing) — only message *content* is.
- **Trust-on-first-use.** We trust whatever public key `e2e_keys` returns; there's no out-of-band
  fingerprint verification yet. A malicious server *could* substitute a key. A future "verify safety
  number" screen would close this.

## Push notifications

A new message fires the `social-notify` Edge Function (`kind: "message"`), which sends the recipient
a Web Push **only if they have a subscription**. Because the body is E2E-encrypted, the server can't
see it — the notification is deliberately generic (`"<name> sent you a message 💬"`, no content) and
deep-links to the thread via `?dm=<senderId>`. Friendship is verified server-side and the existing
per-minute `notify_log` rate-limit applies (rapid messages collapse to one ping/minute per sender).

Message pings ride the same `push_subscriptions` row as workout reminders and other social pushes.
The client ensures a subscription exists when notifications are already granted, and shows a one-time
opt-in banner in Messages otherwise; a DM-only opt-in does **not** enable workout reminders. No schema
change is needed — reuses `push_subscriptions` + `notify_log` from `schema-push.sql`.

## Schema summary (`schema-messages.sql`)

| Object | Purpose |
|---|---|
| `are_friends(a,b)` | definer helper — accepted follows edge in either direction |
| `e2e_keys` | published ECDH public keys; friend-readable |
| `direct_messages` | ciphertext + iv + salt + read_at; RLS to the two participants; insert gated by `are_friends` |
| `key_backups` | owner-only passphrase-wrapped private key |
| realtime | `direct_messages` added to the `supabase_realtime` publication |

Run order: `schema-hardening.sql` → … → `schema-messages.sql`.
