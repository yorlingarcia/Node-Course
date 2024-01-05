import { getPokemonId } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises.ts", () => {
  test("getPokemonId should return a pokemon", async () => {
    const pokemonId = 1;

    const pokemonName = await getPokemonId(pokemonId);

    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an error if pokemon does not exist", async () => {
    const pokemonId = 10000000;

    try {
      await getPokemonId(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
