const getPokemonId = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resp = await fetch(url);
  const pokemon = await resp.json();

  //   throw new Error("Por favor intentelo de nuevo");

  return pokemon.name;
  //   return (
  //     fetch(url)
  //       .then((response) => response.json())
  //       // .then(() => {
  //       //   throw new Error("Por favor intentelo de nuevo");
  //       // })
  //       .then((pokemon) => pokemon.name)
  //   );
};

module.exports = getPokemonId;
