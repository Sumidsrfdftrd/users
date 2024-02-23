const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/users/karan/chats/',
  'karan/chats/index.html',
  'karan/chats/styles.css',
  'chats/chats/',
  'chats/chats/styles.css',
  'chats/chats/script.js',
  'chats/chats/friend1.html',
  'chats/chats/friend2.html',
  'chats/chats/friend3.html',
  'chats/chats/friend4.html',
  'chats/chats/friend5.html',
  'chats/chats/friend6.html',
  'chats/chats/friend7.html',
  'chats/chats/friend8.html',
  'chats/chats/friend9.html',
  'chats/chats/friend10.html',
  'chats/chats/friend11.html',
  'chats/chats/friend12.html',
  'chats/chats/friend13.html',
  'chats/chats/friend14.html',
  'chats/chats/friend15.html',
  'chats/chats/friend51.html',
  'chats/chats/friend52.html',
  'chats/chats/friend53.html',
  'chats/chats/friend54.html',
  'history/',
  'history/index.html',
  'history/styles.css',
  'gallery/',
  'gallery/index.html',
  'gallery/styles.css',
  'gallery/script.js',
  'highlights/',
  'highlights/index.html',
  'highlights/styles.css',
  'highlights/script.js',
   'nudes/',
  'nudes/index.html',
  'nudes/styles.css',
  'nudes/script.js',
   'personalPhotos/',
  'personalPhotos/index.html',
  'personalPhotos/styles.css',
  'personalPhotos/script.js',
  'posts/',
  'posts/index.html',
  'posts/styles.css',
  'posts/script.js',
  'videocalls/',
  'videocalls/index.html',
  'videocalls/styles.css',
  'videocalls/script.js',
  'passwords/',
  'passwords/index.html',
  'passwords/styles.css',
  'passwords/script.js',
  // Add more URLs of files you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Return cached response if available
        }
        return fetch(event.request); // Otherwise, fetch from network
      })
  );
});

