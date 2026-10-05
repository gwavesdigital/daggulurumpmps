const CACHE_NAME = 'mpps-dagguluru-v1';
const urlsToCache = [
  'index.html',
  'about.html',
  'faculty.html',
  'facilities.html',
  'contact.html',
  'components.js',
  'manifest.json',
  'images/ap-emblem.png',
  'images/favicon.png',
  'images/app-icon.png'
];

// Install Service Worker & Cache Files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Cached Files when Offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

// Activate & Clean Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
