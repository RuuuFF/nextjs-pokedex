import { getPokemon } from "../../utils/pokedex";
import Layout from "../../components/Layout";
import ErrorCard from "../../components/ErrorCard";
import PokemonPage from "../../components/PokemonPage";
import { PokemonProps } from "../../utils/pokedex";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { pokemon = null, error = null } = await getPokemon(id);

  return {
    props: { pokemon, error },
  };
}

interface DinamicPageProps {
  pokemon: PokemonProps;
  error: {
    query: string;
  };
}

export default function Pokemon({ pokemon, error }: DinamicPageProps) {
  return (
    <Layout>
      {!error ? <PokemonPage pokemon={pokemon} /> : <ErrorCard error={error} />}
    </Layout>
  );
}
