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
const CACHE = "yalla-v227";
// Split so one optional asset can't take the install down. addAll is all-or-nothing, so a single 404 or
// a flaky 750 KB icon used to leave the worker "installed" with an EMPTY cache — the trailing catch made
// the failure invisible, and skipWaiting was chained after addAll so it was skipped too.
const SHELL = ["./", "./index.html", "./app.css", "./app.js"];            // required: install fails without these
const EXTRAS = ["./manifest.webmanifest", "./icon-1024.png", "./evidence.json"];   // nice to have offline

self.addEventListener("install", (e) => {
  // Pre-cache with cache:"reload" so install ALWAYS bypasses the browser's HTTP cache
  // (GitHub Pages serves app.js/app.css with max-age=600). Combined with bumping CACHE on each deploy,
  // this means a fresh push lands on the next app open instead of after the ~10-minute cache window.
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      c.addAll(SHELL.map((u) => new Request(u, { cache: "reload" })))        // no catch: must succeed
       .then(() => Promise.all(EXTRAS.map((u) =>
         c.add(new Request(u, { cache: "reload" })).catch(() => {}))))       // each optional, individually
       .then(() => self.skipWaiting())
    )
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    // Only sweep the old caches once the new one actually holds the app. Otherwise a half-installed
    // worker deletes the last good cache and an offline cold start has nothing to serve.
    caches.open(CACHE).then((c) => c.match("./app.js")).then((ok) =>
      ok ? caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))) : null
    ).then(() => self.clients.claim())
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
        caches.match(req).then((hit) => {
          if (hit) return hit;
          // The index.html fallback is for page navigations only. Handing it to an <img>/fetch for an
          // uncached asset (the lazy-loaded wp/page-NN.jpg white-paper pages, offline) made every page
          // slot resolve to an HTML document — 17 broken images instead of 17 misses.
          if (req.mode === "navigate") return caches.match("./index.html");
          return Response.error();
        })
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
