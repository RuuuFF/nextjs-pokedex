import Image from "next/image";
import { Container } from "./style";

export default function PageCard(props) {
  const { id, name } = props;
  const myId = id.toString().padStart(3, "0");

  return (
    <Container>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${myId}.png`}
        width={200}
        height={200}
      />
      <h1>{name}</h1>
    </Container>
  );
}
