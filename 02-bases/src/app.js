// require("./js-foundation/01-template");

// const exportTemplate = require("./js-foundation/01-template");
// require("./js-foundation/02-desestructuracion");
// require("./js-foundation/03-callbacks");
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { getUserById } = require("./js-foundation/04-arrow");
const getPokemonId = require("./js-foundation/06-promises");

getPokemonId(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log({ err }))
  .finally(() => console.log("Proceso terminado"));

// const axios = require("axios");
// axios
//   .get(`https://pokeapi.co/api/v2/pokemon/${1}`)
//   .then(({ data }) => console.log({ name: data.name }))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso terminado 2"));

// console.log(axios.isCancel("something"));

// ! reference a factory function
// const { getAge, getUuId } = require("./plugins/index");

// const { buildMakePerson } = require("./js-foundation/05-factory");

// const makePerson = buildMakePerson({ getUuId, getAge });

// const obj = { name: "john Doe", birthdate: "1985-10-21" };
// const john = makePerson(obj);
// console.log(john);
