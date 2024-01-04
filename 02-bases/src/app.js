const getPokemonId = require("./js-foundation/06-promises");

getPokemonId(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log({ err }))
  .finally(() => console.log("Proceso terminado"));
