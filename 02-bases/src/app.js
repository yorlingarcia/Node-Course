// require("./js-foundation/01-template");

// const exportTemplate = require("./js-foundation/01-template");
// require("./js-foundation/02-desestructuracion");
// require("./js-foundation/03-callbacks");
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { getUserById } = require("./js-foundation/04-arrow");
const getPokemonId = require("./js-foundation/06-promises");

getPokemonId(4, (pokemon) => {
  console.log({ pokemon });
});

// ! reference a factory function
// const { getAge, getUuId } = require("./plugins/index");

// const { buildMakePerson } = require("./js-foundation/05-factory");

// const makePerson = buildMakePerson({ getUuId, getAge });

// const obj = { name: "john Doe", birthdate: "1985-10-21" };
// const john = makePerson(obj);
// console.log(john);
