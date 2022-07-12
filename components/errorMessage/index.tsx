import Image from "next/image";
import Head from "next/head";
import { Div } from "../../styles/customDiv";

export default function ErrorMessage({ error }) {
  return (
    <>
      <Head>
        <title>Error | Next.js Pokédex</title>
      </Head>

      <Div
        bg="#fff"
        mt="1.6rem"
        mx="auto"
        p="3.2rem"
        maxWidth="360px"
        borderRadius="0.8rem"
      >
        <Div maxWidth="300px">
          <Div
            fontSize="2.4rem"
            textAlign="center"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Can&apos;t find &quot;{error.query}&quot;
          </Div>

          <Div mt="3.2rem" mx="auto">
            <Image
              alt="pikachu sad"
              width={300}
              height={224}
              src="/pikachu-sad.gif"
            />
          </Div>
        </Div>
      </Div>
    </>
  );
}
