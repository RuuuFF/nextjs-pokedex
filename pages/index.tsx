import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getPokemonList, PokemonListProps } from "../utils/pokedex";
import Card from "../components/card";

interface HomeProps {
  pokeList: PokemonListProps[];
}

export async function getStaticProps() {
  const pokeList = await getPokemonList();

  return {
    props: {
      pokeList,
    },
  };
}

export default function Home({ pokeList }: HomeProps) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        {pokeList.map((pokemon) => (
          <Card key={pokemon.name} {...pokemon} />
        ))}
      </Layout>
    </div>
  );
}
