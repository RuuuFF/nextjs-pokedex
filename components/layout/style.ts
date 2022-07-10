import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(
    45deg,
    hsl(67deg 61% 78%) 0%,
    hsl(162deg 52% 67%) 50%,
    hsl(195deg 58% 60%) 100%
  );
  background-attachment: fixed;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.2rem;
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
  max-width: 96rem;
  margin: 0 auto;
  padding: 1.2rem 1.2rem 5.6rem 1.2rem;
`;
