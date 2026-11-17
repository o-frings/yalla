/* Yalla service worker — makes the app load instantly and work fully offline.
 *
 * The app's own files (SHELL: index.html, app.css, app.js, and evidence.json, which init() awaits) are one set, and a
 * page always loads all of them from this worker's cache:
 *  - When the app opens, the worker first fetches the whole set fresh. If all of it arrives within WAIT, it replaces
 *    the cached set before the page loads, so an online launch gets the latest version.
 *  - On weak gym signal the launch stops waiting after WAIT and opens the cached set; offline it opens it at once.
 * So a launch never hangs on the network, and a page never pairs a new index.html with an old app.js (which a
 * per-file timeout would do right after a deploy). Everything else (white-paper pages, the Supabase SDK, cloud
 * calls) is network-first, cache fallback.
 *
 * Bump CACHE (v94 → v95 → …) on every deploy. Changing this file is what makes the browser notice a new service
 * worker; the new SW then re-fetches the shell with cache:"reload" (bypassing the HTTP cache) and deletes the old
 * cache on activate, so a friend on weak signal still gets the update once it has downloaded.
 */
const CACHE = "yalla-v244";
// Split so one optional asset can't take the install down. addAll is all-or-nothing, so a single 404 or
// a flaky 750 KB icon used to leave the worker "installed" with an EMPTY cache — the trailing catch made
// the failure invisible, and skipWaiting was chained after addAll so it was skipped too.
const SHELL = ["./", "./index.html", "./app.css", "./app.js", "./evidence.json"];   // required: install fails without these
const EXTRAS = ["./manifest.webmanifest", "./icon-1024.png"];                       // nice to have offline
const OWN = new Set(SHELL.map((u) => new URL(u, self.location.href).pathname));     // paths served from the cached set
const WAIT = 2000;   // ms a launch waits for the fresh set before it opens the cached one

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
  const url = new URL(req.url);
  if (url.origin === self.location.origin && OWN.has(url.pathname))
    e.respondWith((req.mode === "navigate" ? refresh() : Promise.resolve()).then(() => saved(req)));
  else e.respondWith(fresh(req));
});

// A file of the set, from the cache. The network only stands in for a cache that went missing (storage evicted).
function saved(req) {
  return caches.open(CACHE).then((c) => c.match(req, { ignoreSearch: true })).then((hit) => hit || fresh(req));
}

// Fetch the whole set and store it only when every file arrived within WAIT. Once the launch has stopped waiting, a
// late arrival is dropped: storing it then could land between this page's index.html and its app.js.
function refresh() {
  return new Promise((done) => {
    const ctl = new AbortController();
    let late = false;
    const t = setTimeout(() => { late = true; ctl.abort(); done(); }, WAIT);
    Promise.all(SHELL.map((u) => fetch(u, { cache: "no-cache", signal: ctl.signal }).then((res) =>
        res.ok ? res.blob().then((body) => [u, body, res.headers.get("Content-Type")]) : Promise.reject(res.status))))
      .then((got) => {
        if (late) return;
        clearTimeout(t);   // from here the launch waits for the writes, so the page can't load half a set
        return caches.open(CACHE).then((c) => Promise.all(got.map(([u, body, type]) =>
          c.put(u, new Response(body, { headers: type ? { "Content-Type": type } : {} })))));
      })
      .catch(() => {})
      .then(() => { clearTimeout(t); done(); });
  });
}

// Everything else: network-first, cache fallback.
function fresh(req) {
  return fetch(req)
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
    );
}

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
