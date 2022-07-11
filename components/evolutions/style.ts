import styled from "styled-components";
import { pokeBgTypes } from "../../styles/poketypes";

export const Container = styled.div`
  .card {
    padding: 1.6rem;
    border-radius: 16px;
    ${pokeBgTypes}

    .image-container {
      position: relative;
      padding: 2.4rem;

      .pokeball {
        position: absolute;
        inset: 0;
        border: 8px solid #ffffff55;
        border-radius: 50%;
        transition: border 0.2s ease;

        &:after {
          position: absolute;
          content: "";
          left: 50%;
          top: 50%;
          width: 100%;
          height: 8px;
          background-color: #ffffff55;
          transform: translate(-50%, -50%);
          transition: background-color 0.2s ease;
        }
      }

      .image-wrapper {
        transition: transform 0.2s ease;
        width: 15rem;
        height: 15rem;
      }
    }

    &:hover {
      .image-wrapper {
        transform: translateY(-4px);
      }

      .pokeball {
        border-color: #ffffffaa;
      }

      .pokeball::after,
      .pokeball::before {
        background-color: #ffffffaa;
      }
    }
  }
`;
