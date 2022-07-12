import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2.2rem;

  .backToHome {
    display: flex;
    align-items: center;

    a {
      font-size: 1.6rem;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .logo-container {
    display: flex;
    justify-content: center;
    grid-column: 2;
  }
`;
