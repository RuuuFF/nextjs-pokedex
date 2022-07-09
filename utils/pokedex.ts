const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const length = 100;

export interface PokemonListProps {
  id: number;
  name: string;
  types: string[];
}

interface PokemonPaths {
  params: {
    pokemon: string;
  };
}

export async function getPokemonList(): Promise<PokemonListProps[]> {
  const pokemons: PokemonListProps[] = [];

  for (let id = 1; id <= length; id++) {
    const res = await fetch(BASE_URL + id);
    const data = await res.json();

    pokemons.push({
      id: data.id,
      name: data.name,
      types: data.types.map((obj: { type: { name: string } }) => {
        return obj.type.name;
      }),
    });
  }

  return pokemons;
}

export async function getAllPokemonId() {
  const pokemons: PokemonPaths[] = [];

  for (let id = 1; id <= length; id++) {
    const res = await fetch(BASE_URL + id);
    const data = await res.json();

    pokemons.push({
      params: {
        pokemon: data.name,
      },
    });
  }

  return pokemons;
}

export async function getPokemon(pokemon: string) {
  const res = await fetch(BASE_URL + pokemon);
  const data = await res.json();

  return data;
}
