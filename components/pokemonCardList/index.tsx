import { PokemonListProps } from "../../utils/pokedex";
import { Div } from "../../styles/customDiv";
import Card from "../card";

export default function PokemonCardList({ pokemonList }) {
  return (
    <Div
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="1.6rem"
      width="100%"
    >
      {pokemonList.map((pokemon: PokemonListProps) => (
        <Card key={pokemon.name} {...pokemon} />
      ))}
    </Div>
  );
}
