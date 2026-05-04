// Network-only passthrough. The page also unregisters this worker on load,
// so it should disappear entirely after one refresh. Until then, this
// prevents stale cached app code from being served.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 504 })));
});
