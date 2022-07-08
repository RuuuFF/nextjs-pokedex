import Image from "next/image";
import { PokeListProps } from "../../api/pokedex";
import { Container } from "./style";

function formatText(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export default function Card({ id, name, types }: PokeListProps) {
  const mainType = types[0];

  return (
    <Container>
      <div className="image-container">
        <div className={`background ${mainType}`}></div>
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
        <p className="id">N&ordm;{id.toString().padStart(3, "0")}</p>

        <div className="types-container">
          {types.map((type) => {
            return (
              <div key={type} className={`type ${type}`}>
                {formatText(type)}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
