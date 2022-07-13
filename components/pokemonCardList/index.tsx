import { useState } from "react";
import {
  baseLength,
  getPokemonList,
  PokemonListProps,
} from "../../utils/pokedex";
import { Div } from "../../styles/customDiv";
import { Button } from "./style";
import Card from "../card";

export default function PokemonCardList({ pokemonList }) {
  const [pokeArray, setPokeArray] = useState(pokemonList);
  const [startFrom, setStartFrom] = useState(baseLength + 1);
  const length = 23;

  async function fetchPokemons() {
    const morePokemons = await getPokemonList(startFrom, startFrom + length);
    setStartFrom(startFrom + length + 1);
    setPokeArray([...pokeArray, ...morePokemons]);
  }

  return (
    <div>
      <Div
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="1.6rem"
        width="100%"
      >
        {pokeArray.map((pokemon: PokemonListProps) => (
          <Card key={pokemon.name} {...pokemon} />
        ))}
      </Div>
      <Div display="flex" justifyContent="center" pt="4rem">
        <Button onClick={fetchPokemons}>LOAD MORE</Button>
      </Div>
    </div>
  );
}
