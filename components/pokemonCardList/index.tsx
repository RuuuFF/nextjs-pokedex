import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  baseLength,
  getPokemonList,
  PokemonListProps,
} from "../../utils/pokedex";
import { formatText, formatId } from "../../utils";
import { Div } from "../../styles/customDiv";
import { Card, Button, Pokeball } from "./style";

export default function PokemonCardList({ pokemonList }) {
  const [pokeArray, setPokeArray] = useState(pokemonList);
  const [startFrom, setStartFrom] = useState(baseLength + 1);
  const [loading, setLoading] = useState(false);
  const length = 23;

  async function fetchPokemons() {
    setLoading(true);
    const morePokemons = await getPokemonList(startFrom, startFrom + length);
    setPokeArray([...pokeArray, ...morePokemons]);
    setStartFrom(startFrom + length + 1);
    setLoading(false);
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
        {pokeArray.map(({ id, name, types }: PokemonListProps) => {
          const mainType = types[0];
          const formattedName = formatText(name);
          const formattedId = formatId(id);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`;

          return (
            <Card key={id}>
              <Link href={`/pokemon/${name}`}>
                <a className="wrapper">
                  <div className="image-container">
                    <div className={`background ${mainType}`}>
                      <div className="pokeball">
                        <div className="ball"></div>
                      </div>
                    </div>
                    <div className="image-wrapper">
                      <Image src={image} alt={name} width={120} height={120} />
                    </div>
                  </div>

                  <Div display="flex" flexDirection="column" p="1.6rem">
                    <h2 className="name">{formattedName}</h2>
                    <p className="id">N&ordm;{formattedId}</p>

                    <Div display="flex" flexDirection="column" gap="0.8rem">
                      {types.map((type) => (
                        <div key={type} className={`type ${type}`}>
                          {formatText(type)}
                        </div>
                      ))}
                    </Div>
                  </Div>
                </a>
              </Link>
            </Card>
          );
        })}
      </Div>
      <Div display="flex" justifyContent="center" mt="4rem">
        {!loading ? (
          <Button onClick={fetchPokemons}>LOAD MORE</Button>
        ) : (
          <Pokeball />
        )}
      </Div>
    </div>
  );
}
