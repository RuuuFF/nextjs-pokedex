import Head from "next/head";
import MyPicture from "../MyPicture";
import Div from "../../utils/customDiv";

export default function ErrorCard({ error }) {
  const message = `Can\'t find \"${error.query}\"`;
  return (
    <Div
      bg="var(--white)"
      mx="auto"
      mt="var(--space-3)"
      p="var(--space-4)"
      maxWidth="360px"
      borderRadius="0.8rem"
    >
      <Head>
        <title>Error | Next.js Pokédex</title>
      </Head>

      <Div textAlign="center">
        <Div
          fontSize="var(--xx-large)"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {message}
        </Div>
        <Div mt="var(--space-5)" mx="auto">
          <MyPicture
            className="errorImage"
            src="/pikachu-sad.gif"
            alt="pikachu sad"
          />
        </Div>
      </Div>
    </Div>
  );
}
