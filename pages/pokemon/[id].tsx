import { getPokemon } from "../../utils/pokedex";
import Layout from "../../components/layout";
import ErrorMessage from "../../components/errorMessage";
import PokemonPage from "../../components/pokemonPage";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { pokemon, error = null } = await getPokemon(id);

  return {
    props: { pokemon, error },
  };
}

export default function Pokemon({ pokemon, error }) {
  return (
    <Layout>
      {!error ? (
        <PokemonPage pokemon={pokemon} />
      ) : (
        <ErrorMessage error={error} />
      )}
    </Layout>
  );
}
