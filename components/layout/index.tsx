import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import { Div } from "../../styles/customDiv";
import { Header } from "./style";

export const siteTitle = "Next.js Pokédex | ruuuff";

export default function Layout({
  children,
  home,
}: {
  children?: any;
  home?: boolean;
}) {
  return (
    <Div
      bg="linear-gradient(
        45deg,
        hsl(67deg 61% 78%) 0%,
        hsl(162deg 52% 67%) 50%,
        hsl(195deg 58% 60%) 100%
      ) fixed"
      minHeight="100vh"
      stringSeparator="_"
    >
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

      <Div maxWidth="96rem" mx="auto">
        <Header>
          {home ? (
            ""
          ) : (
            <Div className="backToHome">
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </Div>
          )}
          <div className="logo-container">
            {home ? (
              <Image
                src="/pokemon-logo.png"
                alt="Pokémon Logo"
                height={73.42}
                width={200}
              />
            ) : (
              <Link href="/">
                <a>
                  <Image
                    src="/pokemon-logo.png"
                    alt="Pokémon Logo"
                    height={73.42}
                    width={200}
                  />
                </a>
              </Link>
            )}
          </div>
        </Header>
        <Div p="1.2rem 1.2rem 5.6rem 1.2rem">
          <main>{children}</main>
        </Div>
      </Div>
    </Div>
  );
}
