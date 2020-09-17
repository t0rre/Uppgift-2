self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/Uppgift-2/index.html',
          '/Uppgift-2/css_large.png',
          '/Uppgift-2/css_small.png',
          '/Uppgift-2/css.png',
          '/Uppgift-2/e_uppgit.png',
          '/Uppgift-2/index.html',
          '/Uppgift-2/manifest.webmanifest',
          '/Uppgift-2/script.js',
          '/Uppgift-2/stylesheet.css',
          '/Uppgift-2/sw.js'
        ]
      );
    })
  );
});
self.addEventListener('start_url', function(event)
{
  console.log("start_url requested")

});