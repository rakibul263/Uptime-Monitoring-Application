/*
 * Title       : Uptime Monitoring Application (Raw Node.js)
 * Description : A RESTful API server built with pure Node.js (no framework) for monitoring website uptime and sending SMS alerts when status changes (UP/DOWN).
 * Author      : MD Rakibul Hasan
 * Date        : 2026-05-15
 */

// dependencies
const http = require("http");

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
  // response handle
  res.end("Hello World");
};

// start server
app.createServer();
