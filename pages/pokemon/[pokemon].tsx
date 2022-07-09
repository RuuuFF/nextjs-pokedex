import { getAllPokemonId, getPokemon } from "../../utils/pokedex";
import Layout from "../../components/layout";
import PageCard from "../../components/pageCard/pageCard";

export async function getStaticPaths() {
  const paths = await getAllPokemonId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pokemon = await getPokemon(params.pokemon);

  return {
    props: {
      pokemon,
    },
  };
}

export default function PokemonPage({ pokemon }) {
  return (
    <Layout>
      <PageCard {...pokemon} />
    </Layout>
  );
}
