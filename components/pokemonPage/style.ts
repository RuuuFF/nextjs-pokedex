import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 0.8rem 2.4rem 2.4rem;
  border-radius: 0.8rem;

  .poke-name {
    text-align: center;
    font-size: 4rem;
    font-weight: 500;
  }

  .poke-id {
    color: #999;
  }

  .image-stat-container {
    display: flex;

    & > * {
      width: 50%;
    }
  }

  .poke-image {
    width: 32rem;
    height: 32rem;
  }
`;
