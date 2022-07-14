import Head from "next/head";
import { PokemonProps } from "../../utils/pokedex";
import { formatId, formatText, getPokemonImageSource } from "../../utils";

import { Div } from "../../styles/customDiv";
import Picture from "../picture";
import Evolutions from "../evolutions";
import { Container } from "./style";

export default function PokemonPage({ pokemon }: { pokemon: PokemonProps }) {
  const { id, name, types, stats, weight, abilities, evolution_chain } =
    pokemon;
  const formattedName = formatText(name);
  const formattedId = formatId(id);
  const pageTitle = `${formattedName} | Next.js Pokédex`;
  const mainType = types[0];
  const image = getPokemonImageSource(formattedId);

  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Div mb="1.6rem">
        <h1 className="poke-name">
          {formattedName + " "}
          <span className="poke-id">N&ordm;{formattedId}</span>
        </h1>
      </Div>

      <div className="image-stat-container">
        <div className="poke-image-container">
          <Picture className="poke-image" src={image} alt={name} />
        </div>

        <div className="stat-container">
          {stats?.map((stat, index) => {
            // const statPercentage = (stat.base_stat * 100) / 220;
            const formattedStatName = formatText(stat.name);

            return (
              <Div className="stat" width="48%" key={index}>
                <div className="stat-name">
                  {formattedStatName} {stat.base_stat}
                </div>
              </Div>
            );
          })}
        </div>
      </div>

      <Evolutions evolutions={evolution_chain} type={mainType} />
    </Container>
  );
}
