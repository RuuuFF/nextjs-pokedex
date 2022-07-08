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

const length = 150;

export async function getPokeList(): Promise<PokeListProps[]> {
  const pokemons = [];

  for (let id = 1; id <= length; id++) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await res.json();

    pokemons.push({
      id: data.id,
      name: data.name,
      types: data.types.map((obj: PokeTypes) => obj.type.name),
    });
  }

  return pokemons;
}
