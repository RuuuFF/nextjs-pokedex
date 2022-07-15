import Head from "next/head";
import { PokemonProps } from "../../utils/pokedex";
import {
  formatId,
  formatText,
  formatNumber,
  getPokemonImageSource,
} from "../../utils";

import Picture from "../picture";
import Evolutions from "../evolutions";
import { Div } from "../../styles/customDiv";
import { Container } from "./style";

export default function PokemonPage({ pokemon }: { pokemon: PokemonProps }) {
  const { id, name, types, stats, weight, height, abilities, evolution_chain } =
    pokemon;
  const formattedName = formatText(name);
  const formattedId = formatId(id);
  const formattedWeight = formatNumber(weight);
  const formattedHeight = formatNumber(height);
  const mainType = types[0];
  const image = getPokemonImageSource(formattedId);
  const pageTitle = `${formattedName} | Next.js Pokédex`;

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

      <Div display="grid" gridtc="1fr 1fr, 1fr" gap="1.6rem">
        <div className="column one">
          <Div width="100%" maxWidth="36rem" bg="#aadfb2" borderRadius="0.8rem">
            <Div width="100%" position="relative" pb="100%">
              <Div position="absolute" inset="0" p="2.4rem">
                <Picture className="poke-image" src={image} alt={name} />
              </Div>
            </Div>
            {/* types */}
          </Div>
        </div>

        <div className="column two">
          <Div className="stats" mb="1.6rem">
            <div>
              <div className="stat-name">Height</div>
              <div className="stat-value">{formattedHeight}m</div>
            </div>
            <div>
              <div className="stat-name">Weight</div>
              <div className="stat-value">{formattedWeight}kg</div>
            </div>

            <Div gridc="1 / span 2">
              <div className="stat-name">Abilities</div>
              <div className="stat-value">
                {abilities.map((abilitie) => formatText(abilitie)).join(", ")}
              </div>
            </Div>
          </Div>

          <div className="stats">
            {stats?.map((stat, index) => {
              const statPercentage = (stat.base_stat * 100) / 220;
              const formattedStatName = formatText(stat.name);

              return (
                <div key={index}>
                  <div
                    className={`stat-name ${
                      stat.name.length <= 2 ? "uppercase" : ""
                    }`}
                  >
                    {formattedStatName}
                  </div>
                  <div className="stat-bar">
                    <Div
                      className={`stat-percentage ${mainType}`}
                      width={`${statPercentage}%`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Div>

      <Evolutions evolutions={evolution_chain} type={mainType} />
    </Container>
  );
}