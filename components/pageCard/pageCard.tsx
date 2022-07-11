import Image from "next/image";
import { formatId, formatText } from "../../utils";
import { Div } from "../../styles/customDiv";
import { Container, Header } from "./style";

export default function PageCard(props: any) {
  const { id, name } = props;
  const formattedName = formatText(name);
  const formattedId = formatId(id);

  const width = "100px,, 50px";
  const height = "100px,, 50px";
  const mediaqueries = "auto, 1280px, 720px";

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
        flexDirection="column, row, row-reverse"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        bg="gray"
        width="100%"
        maxWidth="600px,, 80%"
        height="300px,, 150px"
        mx="auto"
        breakpoints={mediaqueries}
      >
        <Div
          width={width}
          height={height}
          bg="#00f505"
          breakpoints={mediaqueries}
        ></Div>
        <Div
          width={width}
          height={height}
          bg="#0010f5"
          breakpoints={mediaqueries}
        ></Div>
        <Div
          width={width}
          height={height}
          bg="#15afe1"
          breakpoints={mediaqueries}
        ></Div>
      </Div>
    </Container>
  );
}
