const { v4: uuidv4 } = require("uuid");

const getUuId = () => uuidv4();
module.exports = {
  getUuId,
};
