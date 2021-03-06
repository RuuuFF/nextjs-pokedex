import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${variables}
    font-size: 62.5%;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  img {
    position: relative;
    width: 13rem;
    height: 13rem;
    z-index: 1;
    user-select: none;
    -webkit-user-drag: none;
  }

  .errorImage {
    width: 29.6rem;
    height: 22.4rem;
  }
`;
