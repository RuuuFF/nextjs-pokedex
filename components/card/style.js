import styled from "styled-components";
import { pokeTypes } from "./poketypes";

export const Container = styled.div`
  display: flex;
  max-width: 30rem;
  min-height: 20rem;
  width: 100%;
  background-color: #fff;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 5px 5px 15px #00000044;

  &:hover .image {
    transform: translateY(-4px);
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.6rem;
    position: relative;

    .image {
      transition: transform 0.2s ease;
    }

    .background {
      position: absolute;
      content: "";
      inset: 0 2.4rem 0 0;

      ${pokeTypes}

      &::before {
        width: 180px;
        height: 180px;
      }

      &::after {
        width: 60px;
        height: 60px;
      }

      &::before,
      &::after {
        position: absolute;
        content: "";
        top: 50%;
        background-color: transparent;
        border: 12px solid #00000022;
        border-radius: 50%;
        transform: translate(-60%, -50%);
      }
    }
  }

  .poke-infos {
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  .type {
    font-size: 1.4rem;
    color: #666;
    margin-bottom: 1.6rem;
  }

  .abilities-list li {
    font-size: 1.4rem;
  }
`;
