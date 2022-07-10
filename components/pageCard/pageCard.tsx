import Image from "next/image";
import { formatId, formatText } from "../../utils";
import { Div } from "../../styles/customEl";
import { Container, Header } from "./style";

export default function PageCard(props) {
  const { id, name } = props;
  const formattedName = formatText(name);
  const formattedId = formatId(id);

  return (
    <Container>
      <Header>
        <h1 className="name">
          {formattedName + " "}
          <span className="id">N&ordm;{formattedId}</span>
        </h1>
      </Header>
      <Image
        className="nextjs-image"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`}
        width={300}
        height={300}
      />
      <Div
        display="flex"
        bg={["purple", "blue", "orange"]}
        width={["300px", "150px", "75px"]}
        height={["300px", "150px", "75px"]}
        breakpoints={["default", 720, 420]}
      ></Div>
    </Container>
  );
}
