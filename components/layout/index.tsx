import { Container } from "./style";
import Head from "next/head";
import Image from "next/dist/client/image";

export const siteTitle = "Next.js Pokedex | ruuuff";

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Pokedex with Next.js, Styled Components and PokéAPI"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Image
          className="logo"
          src="/pokemon-logo.png"
          alt="Pokémon Logo"
          height={73.42}
          width={200}
        />
      </header>
      <main>{children}</main>
    </Container>
  );
}
