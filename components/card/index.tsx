import Link from "next/link";
import Image from "next/image";
import { PokemonListProps } from "../../utils/pokedex";
import { formatText, formatId } from "../../utils";
import { Container } from "./style";

export default function Card({ id, name, types }: PokemonListProps) {
  const mainType = types[0];

  return (
    <Container>
      <Link href={`/pokemon/${name}`}>
        <a className="wrapper">
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
            <p className="id">N&ordm;{formatId(id)}</p>

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
        </a>
      </Link>
    </Container>
  );
}
