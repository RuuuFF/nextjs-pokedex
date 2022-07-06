import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Card from "../components/card";

export async function getStaticProps() {
  const pokemons = [];
  const length = 200;

  for (let id = 1; id <= length; id++) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await res.json();

    pokemons.push({
      id: data.id,
      name: data.name,
      type: data.types[0].type.name,
      abilities: data.abilities,
    });
  }

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} {...pokemon} />
        ))}
      </Layout>
    </div>
  );
}
