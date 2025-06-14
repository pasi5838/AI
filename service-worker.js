
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("tic-tac-toe").then(function(cache) {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "manifest.json",
        "confetti.js",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
