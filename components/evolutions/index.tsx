import Link from "next/link";
import { formatId, formatText } from "../../utils";
import Picture from "../picture";
import { Div } from "../../styles/customDiv";
import { Container } from "./style";

export default function Evolutions({ evolutions, type }) {
  return (
    <Container>
      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="3.2rem"
        py="3.2rem"
        mx="1.6rem"
      >
        {evolutions.map((evolution) => {
          const { id, name } = evolution;
          const formattedId = formatId(id);
          const formattedName = formatText(name);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`;

          return (
            <Link href={`/pokemon/${evolution.name}`} key={evolution.id}>
              <a className={`card ${type}`}>
                <div className="image-container">
                  <div className="pokeball"></div>
                  <div className="image-wrapper">
                    <Picture src={image} alt={name} />
                  </div>
                </div>
                <p className="evolution-name">
                  {formattedName} N&ordm; {formattedId}
                </p>
              </a>
            </Link>
          );
        })}
      </Div>
    </Container>
  );
}
