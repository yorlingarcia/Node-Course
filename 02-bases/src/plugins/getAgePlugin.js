const getAgePlugin = require("get-age");

const getAge = (birthdate) => {
  if (birthdate) {
    return getAgePlugin(birthdate);
  } else {
    new Error("Birthdate is required");
  }
};
module.exports = {
  getAge,
};
