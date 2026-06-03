/* Yalla service worker — makes the app load instantly and work fully offline.
 *
 * Strategy: network-first, cache fallback.
 *  - Online  → always fetch the latest file, and refresh the cache. So when you push a new
 *              version to GitHub, friends get it the next time they open the app online.
 *  - Offline → serve the last version that was cached. Their log keeps working with no signal.
 *
 * Bump CACHE (v1 → v2 → …) only if you ever need to force-clear old caches; the network-first
 * strategy already picks up new versions on its own, so you usually won't need to touch this.
 */
const CACHE = "yalla-v21";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-1024.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()).catch(() => {})
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
