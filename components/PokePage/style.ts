import { pokemonColorTypes } from "./../../styles/pokemonColors";
import { Type } from "../CardList/style";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  padding: var(--space-2) var(--space-4) var(--space-4);
  border-radius: 0.8rem;

  .poke-name {
    text-align: center;
    font-size: var(--title);
    font-weight: 500;

    .poke-id {
      color: var(--gray);
    }
  }

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: var(--space-4);
  }

  .poke-image {
    width: 100%;
    height: 100%;
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3);
    padding: var(--space-3);
    width: 100%;
    max-width: 40rem;
    background-color: #aadfb2;
    border-radius: 0.8rem;

    .stat-name {
      text-transform: capitalize;
      font-size: var(--small);
      font-weight: 600;

      &.uppercase {
        text-transform: uppercase;
      }
    }

    .stat-value {
      letter-spacing: 1px;
      font-size: var(--x-large);
      font-weight: 400;
      margin-top: var(--space-1);
    }

    .stat-bar {
      height: var(--large);
      background-color: #fff;
      margin-top: var(--space-2);
      border-radius: var(--space-2);
      overflow: hidden;
    }

    .stat-percentage {
      height: inherit;
      border-radius: inherit;
      border: 1px solid #00000033;
      ${pokemonColorTypes}
      transition: width 0.6s ease;
    }
  }
`;

export { Container, Type };
