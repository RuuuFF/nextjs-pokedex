import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 20rem 1fr;
  padding: 2.2rem;

  .backToHome {
    display: flex;
    align-items: center;

    a {
      font-size: 1.6rem;
      font-weight: 500;
      color: #20336e;

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

  .logo {
    height: 7.342rem;
    width: 20rem;
  }
`;
