import Link from "next/link";
import { formatId, formatText, getPokemonImageSource } from "../../utils";

import MyPicture from "../MyPicture";
import Div from "../../utils/customDiv";
import { Container, Type } from "./style";

export default function Evolutions({ evolutions, currentPoke }) {
  return (
    <Container>
      <Div my="var(--space-4)">
        <h2 className="evo-title">Evolutions</h2>
      </Div>

      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="var(--space-5)"
      >
        {evolutions.map((evolution) => {
          const { id, name, types } = evolution;
          const formattedId = formatId(id);
          const formattedName = formatText(name);
          const image = getPokemonImageSource(formattedId);
          const disableLink = currentPoke === name ? "disable" : "";

          return (
            <Link key={evolution.id} href={`/pokemon/${evolution.name}`}>
              <a className={`evo-card ${disableLink}`}>
                <div className="evo-image-container">
                  <MyPicture className="evo-image" src={image} alt={name} />
                </div>
                <p className="evo-name">
                  {formattedName + " "}
                  <span className="evo-id">N&ordm;{formattedId}</span>
                </p>
                <Div
                  display="flex"
                  justifyContent="center"
                  gap="var(--space-2)"
                  mt="var(--space-2)"
                >
                  {types.map((type) => {
                    return (
                      <Type key={type} className={type}>
                        {formatText(type)}
                      </Type>
                    );
                  })}
                </Div>
              </a>
            </Link>
          );
        })}
      </Div>
    </Container>
  );
}
