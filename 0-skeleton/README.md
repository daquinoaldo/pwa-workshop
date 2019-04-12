# PWA for Dummies @ Pisa DevFest 1.0

### Step 1: from skeleton to PWA
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
7. Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) to test the correctness and performance. TIP: using `NODE_ENV=production serve working` https-localhost will serve the content over http/2 with compression and code minification.
8. Check the solution in [1-pwa](../1-pwa).
