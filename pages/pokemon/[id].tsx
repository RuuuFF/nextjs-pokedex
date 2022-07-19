import { getPokemon } from "../../utils/pokedex";
import MyLayout from "../../components/MyLayout";
import ErrorCard from "../../components/ErrorCard";
import PokePage from "../../components/PokePage";

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
      {!error ? <PokePage pokemon={pokemon} /> : <ErrorCard error={error} />}
    </MyLayout>
  );
}
