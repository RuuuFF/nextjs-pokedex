import Image from "next/image";
import Link from "next/link";
import { formatId, formatText } from "../../utils";
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

          return (
            <Link href={`/pokemon/${evolution.name}`} key={evolution.id}>
              <a className={`card ${type}`}>
                <div className="image-container">
                  <div className="pokeball"></div>
                  <div className="image-wrapper">
                    <Image
                      alt={name}
                      width={150}
                      height={150}
                      src={`https: //cdn.traction.one/pokedex/pokemon/${evolution.id}.png`}
                    />
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
