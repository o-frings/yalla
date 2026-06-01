# Yalla push reminders — setup (≈15 min, all in the browser)

Goal: a daily check that sends a **"train at home"** push to signed-in friends who
haven't worked out in 2 days. The app code is already done — this wires up the server.

You'll do it in the Supabase dashboard for project **`sukuuhoglitaeidplhns`**. No coding.

---

## 1. Make your VAPID keys (one terminal command)

VAPID keys are the credential that lets your server send web push. In Terminal:

```
npx web-push generate-vapid-keys
```

It prints a **Public Key** and a **Private Key**. Keep this window open — you'll paste them below.
(If you'd rather not use the terminal, tell me and I'll generate a pair for you.)

---

## 2. Put the PUBLIC key in the app

1. Open `index.html`, find `const SUPA = {` near the top of the main script.
2. Set `vapidPublic` to your **Public Key**:
   ```
   vapidPublic: "PASTE_PUBLIC_KEY_HERE"
   ```
3. Commit & push (or have me do it):
   ```
   git add index.html && git commit -m "Add VAPID public key" && git push
   ```

The **Private Key** stays secret — it only goes into Supabase (step 5).

---

## 3. Create the table

Supabase dashboard → **SQL Editor** → **New query** → paste the contents of
`supabase/schema-push.sql` → **Run**. You should see "Success".

---

## 4. Deploy the reminder function

Dashboard → **Edge Functions** → **Create a function**.
1. Name it exactly **`send-reminders`**.
2. Paste the contents of `supabase/functions/send-reminders/index.ts` into the editor.
3. **Important:** turn **OFF** "Verify JWT" / "Enforce JWT" for this function (the cron calls
   it with a shared secret instead).
4. **Deploy**.

---

## 5. Add the secrets

Edge Functions → **send-reminders** → **Secrets** (or Settings → Secrets). Add four:

| Name | Value |
|---|---|
| `VAPID_PUBLIC` | your Public Key (same as step 2) |
| `VAPID_PRIVATE` | your **Private Key** |
| `VAPID_SUBJECT` | `mailto:your-email@example.com` |
| `CRON_SECRET` | any long random string you make up (e.g. a password manager value) |

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are already available automatically — don't add those.

---

## 6. Schedule it daily

SQL Editor → New query → paste this, replacing `YOUR_CRON_SECRET` with the same value from step 5,
then **Run**:

```sql
create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.schedule(
  'yalla-daily-reminders',
  '0 17 * * *',                         -- 17:00 UTC daily; change if you like
  $$
  select net.http_post(
    url     := 'https://sukuuhoglitaeidplhns.functions.supabase.co/send-reminders',
    headers := jsonb_build_object('Content-Type','application/json','x-cron-secret','YOUR_CRON_SECRET')
  );
  $$
);
```

To change the time later: `select cron.unschedule('yalla-daily-reminders');` then re-run with a new cron expression.

---

## 7. Test it

1. In the app (signed in), go to **Me → Account & sync** and turn on **"Remind me to train after 2 quiet days."** Allow notifications when asked.
2. Force a reminder now: SQL Editor →
   ```sql
   update public.push_subscriptions set last_workout_at = now() - interval '3 days', last_reminded_at = null;
   ```
3. Trigger the function manually: in SQL Editor, re-run the `net.http_post(...)` block from step 6 (or use the function's **Invoke**/Run button in the dashboard).
4. You should get the push within a few seconds. 🎉

---

## Notes
- **iOS:** the friend must have **added Yalla to their Home Screen** and be on **iOS 16.4+** for web push to work — it does not work in the Safari tab.
- Reminders are **opt-in** and only for **signed-in** users (push needs a stored subscription).
- The app keeps the server's "last workout" time fresh every time a workout is saved, so the
  2-day timer is accurate. Expired subscriptions are auto-removed by the function.
- The function won't nag more than once every 2 days per user.
