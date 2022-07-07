export interface PokeListProps {
  id: number;
  name: string;
  type: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

const length = 200;

export async function getPokeList(): Promise<PokeListProps[]> {
  const pokemons = [];

  for (let id = 1; id <= length; id++) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await res.json();

    pokemons.push({
      id: data.id,
      name: data.name,
      type: data.types[0].type.name,
      abilities: data.abilities,
    });
  }

  return pokemons;
}
