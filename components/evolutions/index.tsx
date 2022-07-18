import Link from "next/link";
import { formatId, formatText, getPokemonImageSource } from "../../utils";

import Picture from "../Picture";
import Div from "../../utils/customDiv";
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
          const image = getPokemonImageSource(formattedId);

          return (
            <Link href={`/pokemon/${evolution.name}`} key={evolution.id}>
              <a className={`evo-card ${type}`}>
                <div className="evo-image-container">
                  <div className="evo-image-wrapper">
                    <Picture src={image} alt={name} />
                  </div>
                </div>
                <p className="evo-name">
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
