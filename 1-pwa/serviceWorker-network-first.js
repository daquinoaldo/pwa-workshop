// files to be cached
const files = [
  "/",
  "/css/style.css",
  "/images/icons/android-192x192.png",
  "/images/icons/android-512x512.png",
  "/images/icons/apple-touch-icon.png",
  "/images/icons/favicon-16x16.png",
  "/images/icons/favicon-32x32.png",
  "/images/icons/msapplication-tile.png",
  "/images/logo.svg",
  "/js/app.js",
  "/js/install-sw.js",
  "/favicon.ico",
  "/index.html",
  "/manifest.json"
]

const cacheName = "v0.1.0"

// listen for install event and cache all files
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("Using cache " + cacheName + ".")
      return cache.addAll(files)
        .then(() => {
          console.info("All files are cached.")
          return self.skipWaiting() // force the waiting sw to become the active one
        })
        .catch((error) =>  {
          console.error("Failed to cache. " + error)
        })
    })
  )
})

// listen for install event and delete all the old caches
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cachesKeys) {
      return Promise.all(
        cachesKeys.filter(function(cache) {
          if (cache !== cacheName) {
            console.log("Deleted old cache " + cache + ".")
            console.log("Service worker correctly updated. Reload the page to load the new version of the app.")
            return true
          }
        }).map(function(cache) {
          return caches.delete(cache)
        })
      )
    })
  )
})

// listen for fetch event and try to fetch the request, else fall on cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // fetch frow web
    fetch(event.request)
    // catch a network error
    .catch(function() {
      // return the cache result (empty if not exists in cache)
      caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) return response
        // else page not available in cache
        console.warn("Resource not found in cache nor online, using home: " + event.request.url)
        return caches.match("/")
      })
    })
  )
})
