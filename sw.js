/* Service worker: NETWORK-FIRST dla plików aplikacji (HTML/CSS/JS/dane),
   dzięki czemu każda zmiana w kodzie/danych jest widoczna od razu przy
   następnym otwarciu strony (o ile jest internet). Dla zdjęć w images/
   i ikon w icons/ używamy cache-first (rzadko się zmieniają, dzięki temu
   ładują się błyskawicznie i działają offline).

   CACHE_NAME zmieniony na v2 — to samo w sobie kasuje starą, "zaklejoną"
   wersję cache u wszystkich, którzy mieli zainstalowaną wcześniejszą appkę. */

const CACHE_NAME = 'pojazdy-cache-v2';
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
    // Zdjęcia/ikony: cache-first (szybko + offline), ale dokładane do cache
    // przy pierwszym pobraniu, więc nowe zdjęcia i tak się pojawią.
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

  // HTML/CSS/JS/JSON (w tym data.js): network-first, żeby zmiany z GitHuba
  // były widoczne od razu. Cache służy tylko jako zapasowa wersja offline.
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
