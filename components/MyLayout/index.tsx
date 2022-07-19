import Head from "next/head";
import Link from "next/link";
import MyPicture from "../MyPicture";
import Div from "../../utils/customDiv";
import { Header } from "./style";

export const siteTitle = "Next.js Pokédex | ruuuff";

export default function MyLayout({
  children,
  home,
}: {
  children?: any;
  home?: boolean;
}) {
  return (
    <Div bg="var(--bg-color) fixed" minHeight="100vh">
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
          {!home && (
            <Div className="backToHome">
              <Link href="/">
                <a>
                  Back{" "}
                  <Div display="inline, none" bps="auto, 480px">
                    to home
                  </Div>
                </a>
              </Link>
            </Div>
          )}
          <div className="logo-container">
            {home ? (
              <MyPicture
                className="logo"
                src="/pokemon-logo.png"
                alt="pokémon logo"
              />
            ) : (
              <Link href="/">
                <a>
                  <MyPicture
                    className="logo"
                    src="/pokemon-logo.png"
                    alt="pokémon logo"
                  />
                </a>
              </Link>
            )}
          </div>
        </Header>
        <Div p="var(--space-2) var(--space-2) var(--space-7)">
          <main>{children}</main>
        </Div>
      </Div>
    </Div>
  );
}
