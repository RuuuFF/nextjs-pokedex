import Image from "next/image";
import { Container } from "./style";
import { PokeListProps } from "../../api/pokedex";

function formatText(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export default function Card({ id, name, type, abilities }: PokeListProps) {
  return (
    <Container>
      <div className="image-container">
        <div className={`background ${type.toLowerCase()}`}></div>
        <div className="image">
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
            alt={name}
            width={120}
            height={120}
            className="teste"
          />
        </div>
      </div>

      <div className="poke-infos">
        <h2>{formatText(name)}</h2>
        <h3 className="type">{formatText(type)}</h3>

        <h3>Abilities</h3>
        <ul className="abilities-list">
          {abilities.map(({ ability }) => {
            const name = ability.name.split("-").join(" ");
            return <li key={ability.name}>{formatText(name)}</li>;
          })}
        </ul>
      </div>
    </Container>
  );
}
