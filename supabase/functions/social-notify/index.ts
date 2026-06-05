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

// Strip control chars / newlines and clamp length, so a crafted display_name or
// workout name can't shape a misleading or oversized push-notification body.
const clean = (s: unknown, max = 40) =>
  [...String(s ?? "")].filter((c) => { const n = c.charCodeAt(0); return n >= 32 && n !== 127; })
    .join("").trim().slice(0, max);

// All "nothing to do" outcomes return this single opaque body — never reveal WHY
// (record missing / not a friend / no subscription) to avoid an enumeration oracle.
const OK = () => new Response(JSON.stringify({ ok: true }), { headers: { "content-type": "application/json" } });

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
  const { activityId, kind, text, target, viewers } = body || {};

  const sb = createClient(url, service);

  // Actor's display name (used in every message).
  const { data: aprof } = await sb.from("profiles").select("display_name").eq("user_id", actor.id).maybeSingle();
  const who = clean(aprof?.display_name) || "A friend";

  // ---- Going live: fan out to every accepted follower the actor granted live access to. ----
  // This is a one-to-many push (unlike the single-recipient kinds below), so it's handled inline
  // and returns early. The client calls it once, at go-live; the per-recipient rate limit below
  // collapses any accidental re-invokes.
  if (kind === "live") {
    webpush.setVapidDetails(
      Deno.env.get("VAPID_SUBJECT") || "mailto:hello@yalla.app",
      Deno.env.get("VAPID_PUBLIC")!,
      Deno.env.get("VAPID_PRIVATE")!,
    );
    const { data: grants } = await sb.from("follows").select("follower")
      .eq("followee", actor.id).eq("status", "accepted").eq("live", true);
    const granted = (grants ?? []).map((g: any) => g.follower);
    // Plus any one-off viewers the actor picked for this session (client passes accepted-follower
    // uuids; sanitize to uuid shape and drop self). Union with the persistent grants, de-duped.
    const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const picked = Array.isArray(viewers) ? viewers.filter((v: unknown) => typeof v === "string" && UUID.test(v)) : [];
    const recipients = [...new Set([...granted, ...picked])].filter((id) => id && id !== actor.id);
    if (!recipients.length) return OK();

    // Don't re-push a go-live to the same recipient within 10 minutes (re-entering the workout, etc.).
    const since = new Date(Date.now() - 600_000).toISOString();
    const { data: recent } = await sb.from("notify_log").select("recipient")
      .eq("actor", actor.id).eq("kind", "live").gte("sent_at", since).in("recipient", recipients);
    const muted = new Set((recent ?? []).map((r: any) => r.recipient));

    const { data: subs } = await sb.from("push_subscriptions")
      .select("user_id, subscription").in("user_id", recipients);
    const payload = JSON.stringify({
      title: "Yalla",
      body: `${who} is training live 🔴 — tap to watch & cheer`,
      url: `./?live=${actor.id}`,
      tag: `yalla-live-${actor.id}`,
    });
    for (const s of subs ?? []) {
      if (muted.has(s.user_id) || !s.subscription) continue;
      try {
        await webpush.sendNotification(s.subscription, payload);
        await sb.from("notify_log").insert({ actor: actor.id, recipient: s.user_id, kind: "live" });
      } catch (e) {
        const code = (e && ((e as any).statusCode || (e as any).status)) || 0;
        if (code === 404 || code === 410) await sb.from("push_subscriptions").delete().eq("user_id", s.user_id);
      }
    }
    return OK();
  }

  // Resolve who to notify (`recipient`) and the message, per event kind.
  let recipient: string | null = null;
  let msg = "";

  if (kind === "follow" || kind === "follow_accept") {
    // Follow events: `target` is the user to notify. Verify the edge exists so a caller
    // can't spam arbitrary users.
    if (!target || target === actor.id) return OK();
    if (kind === "follow") {
      const { data: edge } = await sb.from("follows").select("status")
        .eq("follower", actor.id).eq("followee", target).maybeSingle();
      if (!edge) return OK();
      recipient = target;
      msg = edge.status === "accepted" ? `${who} started following you 👋` : `${who} wants to follow you`;
    } else { // follow_accept: actor accepted target's request → tell the requester
      const { data: edge } = await sb.from("follows").select("status")
        .eq("follower", target).eq("followee", actor.id).eq("status", "accepted").maybeSingle();
      if (!edge) return OK();
      recipient = target;
      msg = `${who} accepted your follow request 🤝`;
    }
  } else if (kind === "message") {
    // Direct message: `target` is the recipient. The body is end-to-end encrypted, so the server
    // can't (and won't) include any content — just a generic "you have a message" ping that
    // deep-links to the thread. Either party of an accepted follow edge may DM, so accept both
    // directions. Validate `target` as a uuid before interpolating it into the filter string.
    const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!target || !UUID.test(String(target)) || target === actor.id) return OK();
    const { data: edge } = await sb.from("follows").select("follower")
      .or(`and(follower.eq.${actor.id},followee.eq.${target}),and(follower.eq.${target},followee.eq.${actor.id})`)
      .eq("status", "accepted").limit(1);
    if (!edge || !edge.length) return OK();
    recipient = target;
    msg = `${who} sent you a message 💬`;
  } else {
    // Activity events (cheer / comment): require activityId.
    if (!activityId) return new Response(JSON.stringify({ ok: false }), { status: 400 });
    const { data: act } = await sb.from("activity").select("user_id, summary").eq("id", activityId).maybeSingle();
    if (!act || act.user_id === actor.id) return OK();
    // Only an accepted follower of the owner may trigger a notification (mirrors feed visibility).
    const { data: edge } = await sb.from("follows").select("status")
      .eq("follower", actor.id).eq("followee", act.user_id).eq("status", "accepted").maybeSingle();
    if (!edge) return OK();
    recipient = act.user_id;
    const workout = clean(act.summary && act.summary.name) || "your workout";
    const note = clean(text, 80);
    msg = kind === "comment"
      ? `${who} commented on ${workout}${note ? `: “${note}”` : ""}`
      : `${who} cheered ${workout} 🔥`;
  }

  if (!recipient) return OK();

  // Rate limit: at most one push per (actor → recipient → kind) per minute, so an
  // accepted friend can't replay the invoke to hammer someone with notifications.
  const since = new Date(Date.now() - 60_000).toISOString();
  const { data: recent } = await sb.from("notify_log").select("sent_at")
    .eq("actor", actor.id).eq("recipient", recipient).eq("kind", kind)
    .gte("sent_at", since).limit(1);
  if (recent && recent.length) return OK();

  // Recipient's push subscription (only if they have one).
  const { data: sub } = await sb.from("push_subscriptions").select("subscription").eq("user_id", recipient).maybeSingle();
  if (!sub?.subscription) return OK();

  webpush.setVapidDetails(
    Deno.env.get("VAPID_SUBJECT") || "mailto:hello@yalla.app",
    Deno.env.get("VAPID_PUBLIC")!,
    Deno.env.get("VAPID_PRIVATE")!,
  );
  const payload = JSON.stringify({
    title: "Yalla", body: msg,
    url: kind === "message" ? `./?dm=${actor.id}` : "./",
    tag: kind === "message" ? `yalla-dm-${actor.id}` : "yalla-social",
  });

  try {
    await webpush.sendNotification(sub.subscription, payload);
    // Record the send so the rate-limit window above can see it (best-effort).
    await sb.from("notify_log").insert({ actor: actor.id, recipient, kind });
  } catch (e) {
    const code = (e && ((e as any).statusCode || (e as any).status)) || 0;
    if (code === 404 || code === 410) await sb.from("push_subscriptions").delete().eq("user_id", recipient);
  }
  return OK();
});
