import Head from "next/head";
import Picture from "../Picture";
import Div from "../../utils/customDiv";

interface ErrorCardProps {
  error: {
    query: string;
  };
}

export default function ErrorCard({ error }: ErrorCardProps) {
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
