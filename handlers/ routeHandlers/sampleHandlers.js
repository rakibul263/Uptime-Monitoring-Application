/*
 * Title       : Sample Handler
 * Description : Sample handler
 * Author      : MD Rakibul Hasan
 * Date        : 2026-05-15
 */

// module scaffolding
const handler = {};
handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  
  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
