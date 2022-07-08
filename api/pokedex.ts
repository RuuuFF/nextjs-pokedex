const URL = "https://pokeapi.co/api/v2/pokemon/";
const length = 150;

export interface PokeListProps {
  id: number;
  name: string;
  types: string[];
}

interface PokeTypes {
  type: {
    name: string;
  };
}

export async function getPokeList(): Promise<PokeListProps[]> {
  const pokemons = [];

  for (let id = 1; id <= length; id++) {
    const res = await fetch(URL + id);
    const data = await res.json();

    pokemons.push({
      id: data.id,
      name: data.name,
      types: data.types.map((obj: PokeTypes) => obj.type.name),
    });
  }

  return pokemons;
}

export async function getAllPokemonId() {
  const pokemons = [];

  for (let id = 1; id <= length; id++) {
    const res = await fetch(URL + id);
    const data = await res.json();

    pokemons.push({
      params: {
        id: data.id.toString(),
      },
    });
  }

  return pokemons;
}

export async function getPokemon(id: string | number) {
  const res = await fetch(URL + id);
  const data = await res.json();

  return data;
}
