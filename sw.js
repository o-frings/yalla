/* Yalla service worker — makes the app load instantly and work fully offline.
 *
 * Strategy: network-first, cache fallback.
 *  - Online  → always fetch the latest file, and refresh the cache. So when you push a new
 *              version to GitHub, friends get it the next time they open the app online.
 *  - Offline → serve the last version that was cached. Their log keeps working with no signal.
 *
 * Bump CACHE (v94 → v95 → …) on every deploy. Changing this file is what makes the browser notice a
 * new service worker; the new SW then re-fetches the shell with cache:"reload" (bypassing the HTTP
 * cache) and deletes the old cache on activate, so friends get the update on next open.
 */
const CACHE = "yalla-v198";
const SHELL = ["./", "./index.html", "./app.css", "./app.js", "./manifest.webmanifest", "./icon-1024.png", "./evidence.json"];

self.addEventListener("install", (e) => {
  // Pre-cache the shell with cache:"reload" so install ALWAYS bypasses the browser's HTTP cache
  // (GitHub Pages serves app.js/app.css with max-age=600). Combined with bumping CACHE on each deploy,
  // this means a fresh push lands on the next app open instead of after the ~10-minute cache window.
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: "reload" }))))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        // Cache a copy of every good same-origin response we fetch.
        if (res && res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) => hit || caches.match("./index.html"))
      )
  );
});

/* Web Push — inert until a server (e.g. a Supabase scheduled function) sends a push.
 * Payload: { title, body, url, tag }. Shown as a notification; tapping it focuses the app. */
self.addEventListener("push", (e) => {
  let d = { title: "Yalla", body: "Time to train." };
  try { if (e.data) d = Object.assign(d, e.data.json()); } catch (_) {}
  e.waitUntil(self.registration.showNotification(d.title, {
    body: d.body, icon: "./icon-1024.png", badge: "./icon-1024.png",
    tag: d.tag || "yalla", data: { url: d.url || "./" }
  }));
});
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "./";
  e.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((cs) => {
      for (const c of cs) { if ("focus" in c) return c.focus(); }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
