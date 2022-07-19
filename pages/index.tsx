import Head from "next/head";
import { getPokemonList, PokemonCardProps } from "../utils/pokedex";
import MyLayout, { siteTitle } from "../components/MyLayout";
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
      <MyLayout home>
        <CardList pokemonList={pokemonList} />
      </MyLayout>
    </div>
  );
}
