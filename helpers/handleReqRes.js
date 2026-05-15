/*
 * Title       : Handle Request Response
 * Description : Handle request and response.
 * Author      : MD Rakibul Hasan
 * Date        : 2026-05-15
 */

// dependencies
const { StringDecoder } = require("string_decoder");
const url = require("url");
const routes = require("../routes");
const { notFound } = require("../handlers/ routeHandlers/notFoundHandler");

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  const parseURL = url.parse(req.url, true);
  const path = parseURL.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parseURL.query;
  const headersObject = req.headers;

  const requestProperties = {
    parseURL,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFound;

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      res.writeHead(statusCode, { "Content-Type": "application/json" });
      res.end(payloadString);
    });
  });
};

// export module
module.exports = handler;
