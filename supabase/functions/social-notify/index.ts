// Yalla — social push: notify a post's owner when someone cheers or comments.
// Invoked from the app via supabase.functions.invoke("social-notify", { body }).
// The caller's JWT identifies the actor; we look up the post owner and send them
// a Web Push (if they have a subscription). Self-actions are ignored.
//
// Required secrets (Edge Function → Settings → Secrets):
//   VAPID_PUBLIC, VAPID_PRIVATE, VAPID_SUBJECT (e.g. mailto:you@email.com)
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided automatically.

import { createClient } from "npm:@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("method", { status: 405 });

  const url = Deno.env.get("SUPABASE_URL")!;
  const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  // Identify the actor from their JWT.
  const authz = req.headers.get("Authorization") || "";
  const asUser = createClient(url, anon, { global: { headers: { Authorization: authz } } });
  const { data: ures } = await asUser.auth.getUser();
  const actor = ures?.user;
  if (!actor) return new Response("unauthorized", { status: 401 });

  let body: any = {};
  try { body = await req.json(); } catch (_) {}
  const { activityId, kind, text } = body || {};
  if (!activityId) return new Response(JSON.stringify({ ok: false }), { status: 400 });

  const sb = createClient(url, service);

  // Find the post + its owner.
  const { data: act } = await sb.from("activity").select("user_id, summary").eq("id", activityId).maybeSingle();
  if (!act || act.user_id === actor.id) return new Response(JSON.stringify({ ok: true, skipped: true }));

  // Only an accepted follower of the owner may trigger a notification (mirrors the feed's
  // visibility rule). Skips silently if the friends schema isn't deployed yet.
  const { data: edge } = await sb.from("follows").select("status")
    .eq("follower", actor.id).eq("followee", act.user_id).eq("status", "accepted").maybeSingle();
  if (!edge) return new Response(JSON.stringify({ ok: true, notFriend: true }));

  // Owner's push subscription (only if they have one).
  const { data: sub } = await sb.from("push_subscriptions").select("subscription").eq("user_id", act.user_id).maybeSingle();
  if (!sub?.subscription) return new Response(JSON.stringify({ ok: true, noSub: true }));

  // Actor's display name.
  const { data: prof } = await sb.from("profiles").select("display_name").eq("user_id", actor.id).maybeSingle();
  const who = prof?.display_name || "A friend";
  const workout = (act.summary && act.summary.name) || "your workout";
  const msg = kind === "comment"
    ? `${who} commented on ${workout}${text ? `: “${String(text).slice(0, 80)}”` : ""}`
    : `${who} cheered ${workout} 🔥`;

  webpush.setVapidDetails(
    Deno.env.get("VAPID_SUBJECT") || "mailto:hello@yalla.app",
    Deno.env.get("VAPID_PUBLIC")!,
    Deno.env.get("VAPID_PRIVATE")!,
  );
  const payload = JSON.stringify({ title: "Yalla", body: msg, url: "./", tag: "yalla-social" });

  try {
    await webpush.sendNotification(sub.subscription, payload);
  } catch (e) {
    const code = (e && ((e as any).statusCode || (e as any).status)) || 0;
    if (code === 404 || code === 410) await sb.from("push_subscriptions").delete().eq("user_id", act.user_id);
    return new Response(JSON.stringify({ ok: false, code }), { headers: { "content-type": "application/json" } });
  }
  return new Response(JSON.stringify({ ok: true }), { headers: { "content-type": "application/json" } });
});
