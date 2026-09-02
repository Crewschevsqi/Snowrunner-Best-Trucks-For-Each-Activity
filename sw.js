/* Service worker: NETWORK-FIRST for app files (HTML/CSS/JS/data), so
   every code/data change shows up immediately the next time the page
   is opened (as long as there's an internet connection). For photos in
   images/ and icons in icons/ we use cache-first (they rarely change,
   so they load instantly and still work offline).

   CACHE_NAME was bumped to v2 — this alone clears the old, "stuck"
   cache for anyone who had a previous version of the app installed. */

const CACHE_NAME = 'vehicles-cache-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function isStaticAsset(url){
  return url.pathname.includes('/images/') || url.pathname.includes('/icons/');
}

self.addEventListener('fetch', (event) => {
  if(event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  if(isStaticAsset(url)){
    // Photos/icons: cache-first (fast + offline), but still added to the
    // cache on first fetch, so new photos will show up too.
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if(cached) return cached;
        return fetch(event.request).then((response) => {
          if(response.ok){
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // HTML/CSS/JS/JSON (including data.js): network-first, so changes
  // pushed to GitHub show up right away. The cache is only used as an
  // offline fallback.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if(response.ok){
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
