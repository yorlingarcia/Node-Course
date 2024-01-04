const { getUuId } = require("../plugins/getIdPlugin");
const { getAge } = require("../plugins/getAgePlugin");
const { http } = require("../plugins/http-client.plugin");
const buildLogger = require("../plugins/logger.plugin");

module.exports = {
  getAge,
  getUuId,
  http,
  buildLogger,
};
