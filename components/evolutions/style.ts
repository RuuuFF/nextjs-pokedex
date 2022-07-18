import styled from "styled-components";
import { pokemonColorTypes } from "../../styles/pokemonColors";

export const Container = styled.div`
  .evo-card {
    padding: 1.6rem;
    border-radius: 16px;
    ${pokemonColorTypes}

    &:hover {
      .evo-image-wrapper {
        transform: translateY(-4px);
      }
    }
  }

  .evo-image-container {
    position: relative;
    padding: 2.4rem;
  }

  .evo-image-wrapper {
    transition: transform 0.2s ease;
    width: 15rem;
    height: 15rem;
  }
`;
