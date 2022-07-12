import { getPokemon } from "../../utils/pokedex";
import Layout from "../../components/layout";
import ErrorMessage from "../../components/errorMessage";
import PageCard from "../../components/pageCard/pageCard";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { pokemon = null, error = null } = await getPokemon(id);

  return {
    props: { pokemon, error },
  };
}

export default function PokemonPage({ pokemon, error }) {
  return (
    <Layout>
      {error ? <ErrorMessage error={error} /> : <PageCard {...pokemon} />}
    </Layout>
  );
}
