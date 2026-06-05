# Yalla auth email templates

`signin-code.html` is the branded email that delivers the 6-digit sign-in code.

## Critical: paste it into BOTH templates

The app signs in with `signInWithOtp` + `verifyOtp` (a typed 6-digit code, never a
link — see `app.js`). The email therefore MUST contain `{{ .Token }}`. Supabase
chooses the template by event:

- **Confirm signup** — sent to *first-time* users. This one ships as a link-only
  default (`{{ .ConfirmationURL }}`) with no code, which silently breaks new
  signups. **It must be overwritten with `signin-code.html`.**
- **Magic Link** — sent to *returning* logins.

Dashboard: Authentication → Email Templates → paste `signin-code.html` into both.

## Logo

Uses `icon-email.png` (80×80, ~5 KB), an email-sized copy of `icon-1024.png`,
served from GitHub Pages at `https://o-frings.github.io/yalla/icon-email.png`.
If the icon ever changes, regenerate it:

    sips -Z 80 icon-1024.png --out icon-email.png

Notes:
- The Supabase preview pane does **not** load remote images — send a real test
  email to see the logo. The orange `#e8551c` cell behind it is a fallback so a
  blocked image still looks on-brand rather than broken.
- Colors come from the app: accent `#e8551c` (app.css), background `#f2f2f7`
  (manifest `background_color`).
