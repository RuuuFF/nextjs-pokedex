import { getPokemon } from "../../utils/pokedex";
import MyLayout from "../../components/MyLayout";
import ErrorCard from "../../components/ErrorCard";
import PokemonPage from "../../components/PokemonPage";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { pokemon = null, error = null } = await getPokemon(id);

  return {
    props: { pokemon, error },
  };
}

export default function Pokemon({ pokemon, error }) {
  return (
    <MyLayout>
      {!error ? <PokemonPage pokemon={pokemon} /> : <ErrorCard error={error} />}
    </MyLayout>
  );
}
