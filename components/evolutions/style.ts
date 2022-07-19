import styled from "styled-components";
import { Type } from "../CardList/style";

const Container = styled.div`
  .evo-title {
    font-size: var(--xx-large);
    text-align: center;
  }

  .evo-card {
    padding: var(--space-3);
    border-radius: 16px;
    background-color: var(--light-green);

    &.disable {
      pointer-events: none;
    }

    &:hover {
      .evo-image {
        transform: translateY(-4px);
      }
    }
  }

  .evo-image {
    width: 18rem;
    height: 18rem;
    transition: transform 0.2s ease;
  }

  .evo-name {
    font-size: var(--medium);
    font-weight: 500;
    text-align: center;
  }

  .evo-id {
    opacity: 0.5;
  }
`;

export { Container, Type };
