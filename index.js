/*
 * Title       : Uptime Monitoring Application (Raw Node.js)
 * Description : A RESTful API server built with pure Node.js (no framework) for monitoring website uptime and sending SMS alerts when status changes (UP/DOWN).
 * Author      : MD Rakibul Hasan
 * Date        : 2026-05-15
 */

// dependencies
const http = require("http");
const {handleReqRes} = require("./helpers/handleReqRes");

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

app.handleReqRes = handleReqRes;

// start server
app.createServer();
