import Head from "next/head";
import { PokemonProps } from "../../utils/pokedex";
import { formatId, formatText, getPokemonImageSource } from "../../utils";

// import { Div } from "../../styles/customDiv";
import Picture from "../picture";
import Evolutions from "../evolutions";
import { Container, Header } from "./style";

export default function PokemonPage({ pokemon }: { pokemon: PokemonProps }) {
  const { id, name, types, evolution_chain } = pokemon;
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

      <Header>
        <h1 className="name">
          {formattedName + " "}
          <span className="id">N&ordm;{formattedId}</span>
        </h1>
      </Header>
      <Picture className="pagecard-image" src={image} alt={name} />

      <Evolutions evolutions={evolution_chain} type={mainType} />
    </Container>
  );
}
