import { getAllPokemonId, getPokemon } from "../../api/pokedex";
import Layout from "../../components/layout";

export async function getStaticPaths() {
  const paths = await getAllPokemonId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pokemon = await getPokemon(params.id);

  return {
    props: {
      pokemon,
    },
  };
}

export default function PokemonPage({ pokemon }) {
  return (
    <Layout>
      <h1>{pokemon.name}</h1>
    </Layout>
  );
}
