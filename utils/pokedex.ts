export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const initialLength = 12;

export interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
}

export interface PokemonProps extends PokemonCardProps {
  weight: number;
  abilities: string[];
  stats: {
    base_stat: number;
    name: string;
  }[];
  evolution_chain: {
    id: string;
    name: string;
  }[];
}

interface GetPokemonProps {
  pokemon?: PokemonProps;
  error?: {
    query: string;
  };
}

export async function getPokemonList(startFrom?: number, length?: number) {
  const pokemonList: PokemonCardProps[] = [];
  const start = startFrom || 1;
  const max = length || initialLength;

  for (let id = start; id <= max; id++) {
    const res = await fetch(BASE_URL + id);
    if (!res.ok) return { pokemonList, error: true };
    const data = await res.json();

    pokemonList.push({
      id: data.id,
      name: data.name,
      types: data.types.map((obj: any) => obj.type.name),
    });
  }

  return { pokemonList, error: false };
}

function getIdFromURL(url: string) {
  const stringArray: string[] = url.slice(0, -1).split("/");
  const id = stringArray.at(-1);
  return id;
}

export async function getPokemon(query: string): Promise<GetPokemonProps> {
  const pokeRes = await fetch(BASE_URL + query.toLowerCase());
  const errorCode = !pokeRes.ok;
  if (errorCode) return { error: { query } };
  const pokeData = await pokeRes.json();

  const SPECIES_URL = pokeData.species.url;
  const speciesRes = await fetch(SPECIES_URL);
  const speciesData = await speciesRes.json();

  const EVOLUTION_CHAIN_URL = speciesData["evolution_chain"]?.url;
  const evoChain = [];

  if (EVOLUTION_CHAIN_URL) {
    const evolutionRes = await fetch(EVOLUTION_CHAIN_URL);
    const evolutionData = await evolutionRes.json();
    let evoData = evolutionData.chain;

    do {
      const id = evoData.species.url;
      const name = evoData.species.name;
      let numberOfEvolutions = evoData["evolves_to"].length;

      evoChain.push({ id: getIdFromURL(id), name });

      if (numberOfEvolutions > 1) {
        for (let index = 1; index < numberOfEvolutions; index++) {
          const id = evoData["evolves_to"][index].species.url;
          const name = evoData["evolves_to"][index].species.name;

          evoChain.push({ id: getIdFromURL(id), name });
        }
      }

      evoData = evoData["evolves_to"][0];
    } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
  }

  const pokemon: PokemonProps = {
    id: pokeData.id,
    name: pokeData.name,
    types: pokeData.types.map((obj: any) => obj.type.name),
    stats: pokeData.stats.map((obj: any) => ({
      base_stat: obj.base_stat,
      name: obj.stat.name,
    })),
    weight: pokeData.weight,
    abilities: pokeData.abilities.map((obj: any) => obj.ability.name),
    evolution_chain: evoChain,
  };

  return { pokemon };
}
