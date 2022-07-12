import Head from "next/head";
import { getPokemonList, PokemonListProps } from "../utils/pokedex";
import Layout, { siteTitle } from "../components/layout";
import PokemonCardList from "../components/pokemonCardList";

interface HomeProps {
  pokemonList: PokemonListProps[];
}

export async function getStaticProps() {
  const pokemonList = await getPokemonList();

  return {
    props: {
      pokemonList,
    },
  };
}

export default function Home({ pokemonList }: HomeProps) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout home>
        <PokemonCardList pokemonList={pokemonList} />
      </Layout>
    </div>
  );
}
