// Install service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js', { scope: '/' })
    .then(reg => console.info("Service worker registered."))
}
