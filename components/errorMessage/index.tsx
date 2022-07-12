import Image from "next/image";
import Head from "next/head";
import { Div } from "../../styles/customDiv";

export default function ErrorMessage({ error }) {
  return (
    <>
      <Head>
        <title>Error | Next.js Pokédex</title>
      </Head>

      <Div bg="#fff" mt="2.4rem" p="3.2rem" borderRadius="0.8rem">
        <Div maxWidth="300px">
          <Div
            fontSize="2.4rem"
            textAlign="center"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Can't find "{error.query}"
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
