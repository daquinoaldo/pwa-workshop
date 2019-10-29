// import libraries
const https = require("https")
const { JSDOM } = require("jsdom")
const express = require("express")
const httpsLocalhost = require("https-localhost")()


// This will import a file called app.js in the utils folder.
const app = require('./app.js')

// TODO: EDIT THIS FUNCTION
async function ssr() {
  // This first line transforms the html inside index.html in a dom
  return JSDOM.fromFile(__dirname + "/../index.html").then(async dom => {
    // Now the variable "dom" represents the rendered dom.
    // dom.window is the same window that you have in the browser console.
    // dom.window.document is equal to the document that you have in the browser console.
    // So for example document.getElementById("container") will become
    // dom.window.document.getElementById("container").
  
    // You can access app.js exported functions and objects in that way:
    const weather = await app.getWeather(app.milan.coords.latitude, app.milan.coords.longitude)

    // Now finish the work! This is the code that renders the weather in the client side:
    // getWeather(milan.coords.latitude, milan.coords.longitude).then(setWeather)
    // Write the missing part of code to render the weather computed before in the dom.
    // Hint: it's just a line of code!
    app.setWeather(weather, dom.window.document)

    // Return the new HTML, obtained by serializing the DOM after having
    // modified it. It will be served to the client.
    return dom.serialize()
  })
}
// STOP EDIT

// Express server
const server = express()
// if index.html: serve index.html after calling the ssr function on the html code
server.get('/', async (req, res, next) => res.status(200).send(await ssr()))
// each other file: serve directly
server.use(express.static("../"))
// run on https on port 4443
;(async () => https.createServer(await httpsLocalhost.getCerts(), server)
  .listen(4443, () => console.log('Server started: https://localhost:4443. Press Ctrl+C to quit.')))()