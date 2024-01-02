// require("./js-foundation/01-template");

// const exportTemplate = require("./js-foundation/01-template");
// require("./js-foundation/02-desestructuracion");
// require("./js-foundation/03-callbacks");
const { getUserById } = require("./js-foundation/03-callbacks");

const id = 1;

getUserById(id, function (err, user) {
  if (err) {
    throw new Error(err);
  }
  console.log(user);
});

// console.log(exportTemplate.emailTemplate);
