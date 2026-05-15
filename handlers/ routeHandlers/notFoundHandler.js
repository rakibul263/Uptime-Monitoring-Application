/*
 * Title       : Not Found Handler
 * Description : 404 Not Found Handler
 * Author      : MD Rakibul Hasan
 * Date        : 2026-05-15
 */

const handler = {};

handler.notFound = (requestProperties, callback) => {
  console.log("404 Not Found.");
  callback(404, {
    message: "Your request url is not found.",
  });
};

module.exports = handler;
