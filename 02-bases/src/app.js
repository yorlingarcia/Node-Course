// const getPokemonId = require("./js-foundation/06-promises");

// getPokemonId(4)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log({ err }))
//   .finally(() => console.log("Proceso terminado"));

const { buildLogger } = require("./plugins");

const logger = buildLogger("app,js");

logger.log("Hola mundo");
logger.error("Esto es algo malo");
