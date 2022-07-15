import { pokemonColorTypes } from "./../../styles/pokemonColors";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 0.8rem 2.4rem 2.4rem;
  border-radius: 0.8rem;

  .poke-name {
    margin: 0.8rem 0 2.4rem;
    text-align: center;
    font-size: 3.2rem;
    font-weight: 500;

    .poke-id {
      color: #999;
    }
  }

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2.4rem;
  }

  .poke-image {
    width: 100%;
    height: 100%;
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
    padding: 1.6rem;
    width: 100%;
    max-width: 40rem;
    background-color: #aadfb2;
    border-radius: 0.8rem;

    .stat-name {
      text-transform: capitalize;
      font-size: 1.4rem;
      font-weight: 600;

      &.uppercase {
        text-transform: uppercase;
      }
    }

    .stat-value {
      letter-spacing: 1px;
      font-size: 2.2rem;
      font-weight: 400;
      margin-top: 0.4rem;
    }

    .stat-bar {
      height: 1.8rem;
      background-color: #fff;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
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
