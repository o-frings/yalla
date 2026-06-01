# Putting Yalla online (GitHub Pages) — step by step

Goal: your friends open a web link once, tap **Add to Home Screen**, and Yalla behaves like an app.
When you improve it, you push the new file and everyone gets the update automatically.

You do **not** need to be a programmer for this. It's mostly clicking buttons on github.com.

---

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The whole app (this is what used to be `yalla.html`). |
| `sw.js` | Makes the app work offline and load instantly. |
| `manifest.webmanifest` | Tells phones the app's name, icon, and colors. |
| `icon-1024.png` | The app icon. |
| `yalla-notes.md` | Developer notes (not served to users). |

All four of the first files must sit in the **same folder** in the repo. Don't rename `index.html`,
`sw.js`, or `manifest.webmanifest` — they refer to each other by name.

---

## One-time setup (~10 minutes)

### 1. Create a repository on GitHub
1. Go to <https://github.com/new>.
2. **Repository name:** `yalla` (lowercase).
3. Set it to **Public** (GitHub Pages is free for public repos).
4. Click **Create repository**.

### 2. Upload the files
1. On the new repo page, click **uploading an existing file** (or **Add file → Upload files**).
2. Drag in **`index.html`, `sw.js`, `manifest.webmanifest`, `icon-1024.png`** from this folder.
   (You can skip `yalla-notes.md` and this `SETUP.md` — or upload them too, it's harmless.)
3. Click **Commit changes**.

### 3. Turn on GitHub Pages
1. In the repo, go to **Settings** (top tab) → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. **Branch:** `main`, **Folder:** `/ (root)`. Click **Save**.
4. Wait ~1 minute. The page will show a green link like:
   `https://YOUR-USERNAME.github.io/yalla/`

That link **is** the app. Open it in Safari on your iPhone to test.

### 4. Add it to a Home Screen (you and each friend)
1. Open the link in **Safari** (must be Safari on iPhone, not Chrome).
2. Tap the **Share** button (square with an arrow).
3. Tap **Add to Home Screen** → **Add**.
4. Launch it from the new icon — it opens full-screen, no browser bars, and works offline.

Send your friends the link and tell them to do the same.

---

## Updating the app later

1. Edit `index.html` (or have Claude edit it).
2. On github.com, open the repo → click `index.html` → the pencil (✏️) **Edit** button →
   paste/replace → **Commit changes**.
   (Or use **Add file → Upload files** to replace it.)
3. Done. Next time a friend opens the app **while online**, they get the new version automatically.
   No need to re-add it to the Home Screen.

> If a friend is offline, they keep using the last version that loaded; it updates once they're back online.

---

## Good to know

- **Backups still matter.** Phones can clear app storage, which would wipe a friend's log. The app now
  nudges everyone to export a backup every couple of weeks (**Me → Export**). Encrypted backups need a
  passphrase — if encryption can't run, the export now cancels rather than saving an unprotected file.
- **It's still just a web app**, not in the App Store. That's the right call for a free, friends-only
  project — no $99/year Apple account, no review. If you ever want to go public on the App Store, the
  same `index.html` can later be wrapped with a tool called Capacitor.
- **Private alternative:** if you'd rather the link not be publicly guessable, GitHub Pages on a free
  account is always public. Keeping it friends-only really just means not sharing the link widely.
