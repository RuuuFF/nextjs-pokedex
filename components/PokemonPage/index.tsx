import Head from "next/head";
import { PokemonProps } from "../../utils/pokedex";
import {
  formatId,
  formatText,
  formatNumber,
  getPokemonImageSource,
} from "../../utils";

import Picture from "../Picture";
import Div from "../../utils/customDiv";
import Evolutions from "../Evolutions";
import { Container, Type } from "./style";

interface PokemonPageProps {
  pokemon: PokemonProps;
}

export default function PokemonPage({ pokemon }: PokemonPageProps) {
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

      <Div m="var(--space-2) 0 var(--space-5)">
        <h1 className="poke-name">
          {formattedName + " "}
          <span className="poke-id">N&ordm;{formattedId}</span>
        </h1>
      </Div>

      <Div display="grid" gridtc="1fr 1fr, 1fr" gap="var(--space-3)">
        <div className="column one">
          <Div
            width="100%"
            maxWidth="36rem"
            bg="var(--light-green)"
            borderRadius="0.8rem"
          >
            <Div width="100%" position="relative" pb="100%">
              <Div position="absolute" inset="0" p="var(--space-3)">
                <Picture className="poke-image" src={image} alt={name} />
              </Div>
            </Div>
          </Div>

          <Div
            display="flex"
            justifyContent="center"
            gap="var(--space-2)"
            mt="var(--space-2)"
            width="100%"
          >
            {types.map((type) => {
              return (
                <Type
                  className={type}
                  key={type}
                  fs="var(--medium)"
                  width="30%"
                >
                  {formatText(type)}
                </Type>
              );
            })}
          </Div>
        </div>

        <div className="column two">
          <Div className="stats" mb="var(--space-3)">
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

      <Evolutions evolutions={evolution_chain} currentPoke={name} />
    </Container>
  );
}
