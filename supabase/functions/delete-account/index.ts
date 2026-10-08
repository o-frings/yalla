// Yalla — account deletion. Invoked from the app via supabase.functions.invoke("delete-account").
//
// Why this exists: the client-side delete could only reach the three tables it had DELETE policies for
// (activity, user_data, profiles). Everything else keyed to the user survived — direct_messages,
// dm_reactions, e2e_keys, key_backups (the passphrase-wrapped private key), push_subscriptions
// (including the push endpoint, a persistent device identifier), follows in both directions,
// live_sessions (with its workout snapshot) and live_reactions. live_reactions in particular has only
// SELECT and INSERT policies, so a client DELETE returns 0 rows with no error — a silent partial wipe.
//
// Deleting the auth user is the only complete answer: every one of those tables declares
// `references auth.users on delete cascade`, so one statement clears all of them.
//
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided automatically by the platform.
// Deploy:  supabase functions deploy delete-account

import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const auth = req.headers.get("Authorization") || "";
  if (!auth.startsWith("Bearer ")) return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });

  const url = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  // Identify the caller from their OWN jwt — never from the request body, which the caller controls.
  const asUser = createClient(url, Deno.env.get("SUPABASE_ANON_KEY") ?? serviceKey, {
    global: { headers: { Authorization: auth } },
    auth: { persistSession: false },
  });
  const { data: who, error: whoErr } = await asUser.auth.getUser();
  if (whoErr || !who?.user) return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  const uid = who.user.id;

  const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

  // Rows that point at the user WITHOUT an on-delete-cascade FK have to go first, or they are orphaned.
  // follows is the one that matters: the inbound half (follower -> me) is keyed on the other user.
  try { await admin.from("follows").delete().or(`follower.eq.${uid},followee.eq.${uid}`); } catch (_) { /* best effort */ }

  // The cascade does the rest: user_data, activity (and its cheers/comments), profiles, direct_messages,
  // dm_reactions, e2e_keys, key_backups, push_subscriptions, live_sessions, live_reactions.
  const { error } = await admin.auth.admin.deleteUser(uid);
  if (error) {
    // Fail loudly. A partial wipe that reports success is worse than a clean failure the user can retry.
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), { headers: { "content-type": "application/json" } });
});
