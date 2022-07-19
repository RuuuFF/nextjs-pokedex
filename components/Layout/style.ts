import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 20rem 1fr;
  padding: var(--space-4);

  .backToHome {
    display: flex;
    align-items: center;

    a {
      font-weight: 500;
      font-size: var(--medium);
      color: var(--dark-blue);

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
