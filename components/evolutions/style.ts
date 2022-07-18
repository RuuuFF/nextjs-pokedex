import styled from "styled-components";
import { pokemonColorTypes } from "../../styles/pokemonColors";

export const Container = styled.div`
  .evo-card {
    padding: var(--space-3);
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
    padding: var(--space-4);
  }

  .evo-image-wrapper {
    transition: transform 0.2s ease;
    width: 15rem;
    height: 15rem;
  }
`;
