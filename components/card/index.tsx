import Image from "next/image";
import { PokeListProps } from "../../api/pokedex";
import { Container } from "./style";

function formatText(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export default function Card({ id, name, type, abilities }: PokeListProps) {
  return (
    <Container>
      <div className="image-container">
        <div className={`background ${type.toLowerCase()}`}></div>
        <div className="image-wrapper">
          <Image
            className="nextjs-image"
            src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
            alt={name}
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className="pokeinfo-container">
        <h2 className="name">{formatText(name)}</h2>
        <p className="id">{formatText(type)}</p>

        <h3>Abilities</h3>
        <ul className="abilities">
          {abilities.map(({ ability }) => {
            const name = ability.name.split("-").join(" ");
            return <li key={ability.name}>{formatText(name)}</li>;
          })}
        </ul>
      </div>
    </Container>
  );
}
