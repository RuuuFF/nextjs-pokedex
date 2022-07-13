import styled from "styled-components";
import { pokeBgTypes, pokeColorTypes } from "../../styles/poketypes";

export const Card = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 30rem;
  min-height: 20rem;
  border-radius: 0.8rem;
  box-shadow: 5px 5px 15px #00000044;
  overflow: hidden;
  cursor: pointer;

  .wrapper {
    display: flex;
    height: 100%;
  }

  .image-container {
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
    position: relative;
  }

  .image-wrapper {
    transition: transform 0.2s ease;
  }

  .background {
    position: absolute;
    inset: 0 2.4rem 0 0;
    background-repeat: no-repeat;
    ${pokeBgTypes}
  }

  .pokeball {
    color: #000;
    position: absolute;
    top: 50%;
    left: -5%;
    width: 190px;
    height: 190px;
    opacity: 0.14;
    overflow: hidden;
    border: 10px solid currentColor;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease;

    .ball {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      border: inherit;
      border-radius: inherit;
      transform: translate(-50%, -50%);

      &:before,
      &:after {
        background-color: currentColor;
        position: absolute;
        content: "";
        left: 100%;
        top: 50%;
        width: 100px;
        height: 10px;
        transform: translate(0, -50%);
      }

      &:after {
        left: auto;
        right: 100%;
      }
    }
  }

  .name {
    font-size: 1.8rem;
  }

  .id {
    font-size: 1.4rem;
    font-weight: 600;
    color: #999;
    margin-bottom: 1.6rem;
  }

  .type {
    color: #f1f1f1;
    text-align: center;
    font-size: 1.4rem;
    width: 80px;
    padding: 0.2rem 0;
    border-radius: 4px;
    ${pokeColorTypes}
  }

  &:hover {
    .image-wrapper {
      transform: translateY(-4px);
    }

    .pokeball {
      opacity: 0.2;
    }
  }

  &:active img {
    transform: scale(0.98);
  }
`;

export const Button = styled.button`
  background-color: #f7c600;
  font-weight: 600;
  font-size: 1.6rem;
  color: #20336e;
  padding: 1rem 2.4rem;
  border: 0;
  border-radius: 0 2.4rem;
  box-shadow: 2px 2px 15px #00000077;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
