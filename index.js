/*
 * Title       : Uptime Monitoring Application (Raw Node.js)
 * Description : A RESTful API server built with pure Node.js (no framework) for monitoring website uptime and sending SMS alerts when status changes (UP/DOWN).
 * Author      : MD Rakibul Hasan
 * Date        : 2026-05-15
 */

// dependencies
const http = require("http");
const { StringDecoder } = require("string_decoder");

// app object - module scaffoholding
const app = {};

// configuration
app.config = {
  PORT: 3000,
};

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.PORT, () => {
    console.log(`The server is running at ${app.config.PORT}`);
  });
};

// handle request and response
app.handleReqRes = (req, res) => {
  // request handle
  // get url and parse this url (using WHATWG URL API)
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const path = urlObj.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  // get method
  const method = req.method.toLowerCase();
  // get query stream
  const queryStringObject = Object.fromEntries(urlObj.searchParams);
  // request headers -> request er sate ase kisu meta data
  const headersObject = req.headers;
  // body parse
  const decoder = new StringDecoder("utf-8");
  let realData = "";
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end();
  });

  // response handle
  res.end("Hello World");
};

// start server
app.createServer();
