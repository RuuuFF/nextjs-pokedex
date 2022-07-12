import { getPokemon } from "../../utils/pokedex";
import { Div } from "../../styles/customDiv";
import Layout from "../../components/layout";
import PageCard from "../../components/pageCard/pageCard";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { pokemon = null, error = null } = await getPokemon(id);

  return {
    props: { pokemon, error },
  };
}

export default function PokemonPage({ pokemon, error }) {
  console.log(pokemon, error);
  return (
    <Layout>
      {error ? (
        <Div
          mt="3.2rem"
          padding="4rem"
          borderRadius="0.8rem"
          bg="#fff"
          fontSize="3.2rem"
        >
          Can't find "{error.query}"
        </Div>
      ) : (
        <PageCard {...pokemon} />
      )}
    </Layout>
  );
}
