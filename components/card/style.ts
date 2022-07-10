import styled from "styled-components";
import { pokeBgTypes, pokeColorTypes } from "../../styles/poketypes";

export const Container = styled.div`
  max-width: 30rem;
  min-height: 20rem;
  width: 100%;
  background-color: #fff;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 5px 5px 15px #00000044;

  .wrapper {
    display: flex;
    height: 100%;
    width: 100%;
  }

  &:hover {
    cursor: pointer;

    & .image-wrapper {
      transform: translateY(-4px);
    }
  }

  &:active .nextjs-image {
    -webkit-user-drag: none;
    transform: scale(0.98);
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.6rem;
    position: relative;

    .background {
      position: absolute;
      content: "";
      inset: 0 2.4rem 0 0;
      background-repeat: no-repeat;

      ${pokeBgTypes}

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

    .image-wrapper {
      transition: transform 0.2s ease;
      user-select: none;
    }
  }

  .pokeinfo-container {
    display: flex;
    flex-direction: column;
    padding: 1.6rem;

    .name {
      font-size: 1.8rem;
    }

    .id {
      font-size: 1.4rem;
      color: #999;
      margin-bottom: 1.6rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 500;
    }

    .abilities li {
      font-size: 1.4rem;
    }

    .types-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;

      .type {
        color: #f1f1f1;
        text-align: center;
        font-size: 1.4rem;
        width: 80px;
        padding: 0.2rem 0;
        border-radius: 4px;

        ${pokeColorTypes}
      }
    }
  }
`;
