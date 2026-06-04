// Yalla — daily "train at home" reminder sender (Supabase Edge Function).
// Finds signed-in users with reminders on whose last workout was 2+ days ago,
// and sends them a Web Push. Invoked once a day by pg_cron (see PUSH-SETUP.md).
//
// Required secrets (Edge Function → Settings → Secrets):
//   VAPID_PUBLIC, VAPID_PRIVATE, VAPID_SUBJECT (e.g. mailto:you@email.com), CRON_SECRET
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided automatically.

import { createClient } from "npm:@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";

const DAY = 86_400_000;

Deno.serve(async (req) => {
  // Shared-secret guard so the public URL can't be triggered by anyone. Fail CLOSED:
  // if the secret is missing/empty (deploy slip), deny rather than run wide open.
  const secret = Deno.env.get("CRON_SECRET");
  if (!secret || req.headers.get("x-cron-secret") !== secret) {
    return new Response("forbidden", { status: 403 });
  }

  const sb = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  webpush.setVapidDetails(
    Deno.env.get("VAPID_SUBJECT") || "mailto:hello@yalla.app",
    Deno.env.get("VAPID_PUBLIC")!,
    Deno.env.get("VAPID_PRIVATE")!,
  );

  // Opportunistic housekeeping: keep the social-notify rate-limit log small, prune old live
  // reactions, and close any "live" session whose broadcaster went quiet (app closed mid-workout
  // without finishing) so it can't linger as a stuck 🔴 in friends' feeds. The client also closes
  // its own session on finish/toggle-off; this is the backstop. 20-min idle ⇒ closed.
  await sb.from("notify_log").delete().lt("sent_at", new Date(Date.now() - 2 * DAY).toISOString());
  await sb.from("live_reactions").delete().lt("created_at", new Date(Date.now() - 2 * DAY).toISOString());
  await sb.from("live_sessions").update({ active: false })
    .eq("active", true).lt("updated_at", new Date(Date.now() - 20 * 60_000).toISOString());

  const cutoff = new Date(Date.now() - 2 * DAY).toISOString();
  const { data: rows, error } = await sb
    .from("push_subscriptions")
    .select("user_id, subscription, last_workout_at, last_reminded_at")
    .eq("reminders_on", true)
    .or(`last_workout_at.lt.${cutoff},last_workout_at.is.null`);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  const payload = JSON.stringify({
    title: "Yalla",
    body: "No gym access right now? Train at home — a quick bodyweight session keeps your streak alive.",
    url: "./",
    tag: "yalla-reminder",
  });

  let sent = 0, cleaned = 0;
  for (const r of rows ?? []) {
    // don't nag more than once every 2 days
    if (r.last_reminded_at && new Date(r.last_reminded_at).getTime() > Date.now() - 2 * DAY) continue;
    try {
      await webpush.sendNotification(r.subscription, payload);
      await sb.from("push_subscriptions")
        .update({ last_reminded_at: new Date().toISOString() })
        .eq("user_id", r.user_id);
      sent++;
    } catch (e) {
      const code = (e && (e.statusCode || e.status)) || 0;
      if (code === 404 || code === 410) { // subscription expired/gone
        await sb.from("push_subscriptions").delete().eq("user_id", r.user_id);
        cleaned++;
      }
    }
  }
  return new Response(JSON.stringify({ sent, cleaned }), {
    headers: { "content-type": "application/json" },
  });
});
