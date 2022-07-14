import Head from "next/head";
import Picture from "../picture";
import { Div } from "../../styles/customDiv";

export default function ErrorMessage({ error }) {
  const message = `Can\'t find \"${error.query}\"`;
  return (
    <Div
      bg="#fff"
      mt="1.6rem"
      mx="auto"
      p="3.2rem"
      maxWidth="360px"
      borderRadius="0.8rem"
    >
      <Head>
        <title>Error | Next.js Pokédex</title>
      </Head>
      <Div maxWidth="300px">
        <Div
          fontSize="2.4rem"
          textAlign="center"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {message}
        </Div>

        <Div mt="3.2rem" mx="auto">
          <Picture
            className="errorImage"
            src="/pikachu-sad.gif"
            alt="pikachu sad"
          />
        </Div>
      </Div>
    </Div>
  );
}
