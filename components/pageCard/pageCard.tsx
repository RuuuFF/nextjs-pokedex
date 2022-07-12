import Image from "next/image";
import Head from "next/head";
import { PokemonProps } from "../../utils/pokedex";
import { formatId, formatText } from "../../utils";
// import { Div } from "../../styles/customDiv";
import Evolutions from "../evolutions";
import { Container, Header } from "./style";

export default function PageCard(props: PokemonProps) {
  const { id, name, types, evolution_chain } = props;
  const formattedName = formatText(name);
  const formattedId = formatId(id);
  const mainType = types[0];

  return (
    <Container>
      <Head>
        <title>{formattedName} | Next.js Pokédex</title>
      </Head>

      <Header>
        <h1 className="name">
          {formattedName + " "}
          <span className="id">N&ordm;{formattedId}</span>
        </h1>
      </Header>
      <Image
        className="nextjs-image"
        alt={name}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`}
        width={300}
        height={300}
      />

      <Evolutions evolutions={evolution_chain} type={mainType} />
    </Container>
  );
}
