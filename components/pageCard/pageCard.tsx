import Head from "next/head";
import { PokemonProps } from "../../utils/pokedex";
import { formatId, formatText } from "../../utils";
// import { Div } from "../../styles/customDiv";
import Picture from "../picture";
import Evolutions from "../evolutions";
import { Container, Header } from "./style";

export default function PageCard(props: PokemonProps) {
  const { id, name, types, evolution_chain } = props;
  const formattedName = formatText(name);
  const formattedId = formatId(id);
  const pageTitle = `${formattedName} | Next.js Pokédex`;
  const mainType = types[0];
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`;

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
