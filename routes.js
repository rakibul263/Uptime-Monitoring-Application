/*
 * Title       : Routes
 * Description : Application Routes
 * Author      : MD Rakibul Hasan
 * Date        : 2026-05-15
 */

// dependencies
const { sampleHandler } = require("./handlers/ routeHandlers/sampleHandlers");
const routes = {
  sample: sampleHandler,
};

module.exports = routes;
