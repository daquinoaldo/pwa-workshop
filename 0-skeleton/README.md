# PWA from scratch - Oct 30, 2019 @ GATE Pisa

## Step 1: from skeleton to PWA
1. Explore the code and understand how it works. Use [https-localhost](https://github.com/daquinoaldo/https-localhost) to see the result in your browser.
2. Move `/utils/serviceWorker.js` in `/` and edit it.
3. Edit `/js/app.js` and add this code to install the service worker:
   ```
   if ('serviceWorker' in navigator)
     navigator.serviceWorker.register('/serviceWorker.js', { scope: '/' })
       .then(reg => console.info("Service worker registered."))
   ```
4. Move `/utils/manifest.json` and edit it.
5. Edit the HTML in `/utils/headers.html` and move it in the `<head>` section of `/index.html`.
6. Replace the images in `/images` and `/favicon.ico`.
7. Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) to test the correctness and performance.
8. Check the solution in [1-pwa](../1-pwa).

## Step 1b: try different caching strategies
1. Look at the Service Worker and understand how the cache-first strategy is implemented.
2. Take a look to [The Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook) to understand the caches strategies.
3. Edit `serviceWorker.js`  to obtain a network-first strategy, with cache as fallback.
4. Test the result using [https-localhost](https://github.com/daquinoaldo/https-localhost) and the network tab of Chrome Dev Tools (F12) or the corresponding tool of your browser.
5. Check the solution in [1-pwa/serviceWorker-network-first.js](../1-pwa/serviceWorker-network-first.js).
6. Compare the speed of both approaches.
7. Try other strategies that may better fit your needs.
