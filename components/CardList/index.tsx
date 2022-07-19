import { useState } from "react";
import Link from "next/link";
import {
  initialLength,
  getPokemonList,
  PokemonCardProps,
} from "../../utils/pokedex";
import Picture from "../Picture";
import Div from "../../utils/customDiv";
import { formatText, formatId, getPokemonImageSource } from "../../utils";
import { Card, Button, Pokeball, Type } from "./style";

export default function CardList({ pokemonList }) {
  const [pokemons, setPokemons] = useState(pokemonList);
  const [startFrom, setStartFrom] = useState(initialLength + 1);
  const [hideButton, setHideButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const length = 23;

  async function fetchPokemons() {
    setLoading(true);
    const { pokemonList: morePokemons, error } = await getPokemonList(
      startFrom,
      startFrom + length
    );
    setPokemons([...pokemons, ...morePokemons]);
    setLoading(false);
    if (error) return setHideButton(true);
    setStartFrom(startFrom + length + 1);
  }

  return (
    <div>
      <Div
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="var(--space-3)"
        width="100%"
      >
        {pokemons.map(({ id, name, types }: PokemonCardProps) => {
          const mainType = types[0];
          const formattedName = formatText(name);
          const formattedId = formatId(id);
          const image = getPokemonImageSource(formattedId);

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
                      <Picture src={image} alt={name} />
                    </div>
                  </div>

                  <Div display="flex" flexDirection="column" p="var(--space-3)">
                    <h2 className="name">{formattedName}</h2>
                    <p className="id">N&ordm;{formattedId}</p>

                    <Div
                      display="flex"
                      flexDirection="column"
                      gap="var(--space-2)"
                    >
                      {types.map((type) => (
                        <Type key={type} className={type}>
                          {formatText(type)}
                        </Type>
                      ))}
                    </Div>
                  </Div>
                </a>
              </Link>
            </Card>
          );
        })}
      </Div>
      <Div display="flex" justifyContent="center" mt="var(--space-6)">
        {!loading ? (
          !hideButton && <Button onClick={fetchPokemons}>LOAD MORE</Button>
        ) : (
          <Pokeball />
        )}
      </Div>
    </div>
  );
}
