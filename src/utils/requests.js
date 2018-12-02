const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonUrl = pokemonIndex => `${BASE_URL}/${pokemonIndex}/`;
