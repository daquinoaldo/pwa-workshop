# PWA from scratch - Oct 30, 2019 @ GATE Pisa

## Step 3: experiment with SSR
Let's find a way to implement Server Side Rendering.

Each framework has its approaches, and for plain Vanilla.js the best idea is to design the app with SSR in mind.  
Anyway, we will use an escamotage to test SSR and see the benefits.

The [utils](utils) folder contains a Node.js server that allows to execute Javascript on the page before send it.
1. Copy the utils folder in a new server folder: `cp -r utils server`.
2. Move to the server folder and install the server with `npm i`.
3. Lunch the server with `npm start` and check if it works.
4. Disable JavaScript in your browser. Google Chrome: `F12`, then `Ctrl/CMD + Shift + P` and type `Disable JavaScript`.
5. Reload the page and check what you see without JavaScript.
6. Edit [server.js](utils/server.js) so that it will serve the page with a rendered weather card.
7. Restart the server (`Ctrl + C` and then run again with `npm start`) and see the result.
8. Check the solution in [3-ssr](../3-ssr).
9. Don't forget to re-enable JavaScript in your browser. Google Chrome: `F12`, then `Ctrl/CMD + Shift + P` and type `Enable JavaScript`.
