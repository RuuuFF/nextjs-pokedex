import Head from "next/head";
import { getPokemonList, PokemonCardProps } from "../utils/pokedex";
import Layout, { siteTitle } from "../components/Layout";
import CardList from "../components/CardList";

interface HomeProps {
  pokemonList: PokemonCardProps[];
}

export async function getStaticProps() {
  const { pokemonList } = await getPokemonList();

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
        <CardList pokemonList={pokemonList} />
      </Layout>
    </div>
  );
}
