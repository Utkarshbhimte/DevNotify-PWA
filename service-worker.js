var cacheName = 'devNotifyPWA-v1';
var dataCacheName = 'devNotifyData-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/test.json',
  '/js/script.js',
  '/js/jquery.js',
  '/js/localforage-1.4.0.js',
  '/css/style.css',
  '/css/skeleton.css',
  '/css/normalize.css',
  '/images/logo.png',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});
