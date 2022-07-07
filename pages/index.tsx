import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getPokeList, PokeListProps } from "../api/pokedex";
import Card from "../components/card";

interface HomeProps {
  pokeList: PokeListProps[];
}

export async function getStaticProps() {
  const pokeList = await getPokeList();

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
