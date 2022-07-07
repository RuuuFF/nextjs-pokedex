import { css } from "styled-components";

export const pokeColorTypes = css`
  &.fire {
    background-color: #f04822;
  }

  &.ice {
    background-color: #68bae3;
    color: #000;
  }

  &.grass {
    background-color: #27aa48;
  }

  &.electric {
    background-color: #f5e614;
    color: #000;
  }

  &.water {
    background-color: #2d8bcf;
  }

  &.ground {
    background-color: #b66a1e;
  }

  &.rock {
    background-color: #858583;
  }

  &.fairy {
    background-color: #e99ef6;
    color: #000;
  }

  &.poison {
    background-color: #9a38ce;
  }

  &.bug {
    background-color: #90bb43;
    color: #000;
  }

  &.dragon {
    background-color: #b31116;
  }

  &.psychic {
    background-color: #c2c75e;
    color: #000;
  }

  &.fighting {
    background-color: #cab384;
    color: #000;
  }

  &.ghost {
    background-color: #504343;
  }

  &.dark {
    background-color: #000;
  }

  &.flying,
  &.normal {
    background-color: #e9e9e9;
    color: #000;
  }
`;

export const pokeBgTypes = css`
  &.fire {
    background-image: linear-gradient(
      45deg,
      hsl(14deg 86% 52%) 0%,
      hsl(10deg 87% 54%) 33%,
      hsl(5deg 88% 55%) 67%,
      hsl(0deg 88% 57%) 100%
    );
  }

  &.ice {
    background-image: linear-gradient(
      45deg,
      hsl(191deg 93% 49%) 0%,
      hsl(199deg 86% 63%) 50%,
      hsl(208deg 76% 69%) 100%
    );
  }

  &.grass {
    background-image: linear-gradient(
      45deg,
      hsl(127deg 75% 30%) 0%,
      hsl(135deg 63% 41%) 50%,
      hsl(142deg 60% 51%) 100%
    );
  }

  &.electric {
    background-image: linear-gradient(
      45deg,
      hsl(64deg 56% 58%) 0%,
      hsl(59deg 73% 56%) 50%,
      hsl(55deg 100% 50%) 100%
    );
  }

  &.water {
    background-image: linear-gradient(
      45deg,
      hsl(208deg 85% 41%) 0%,
      hsl(202deg 67% 56%) 50%,
      hsl(195deg 71% 75%) 100%
    );
  }

  &.ground {
    background-image: linear-gradient(
      45deg,
      hsl(30deg 80% 40%) 0%,
      hsl(30deg 64% 43%) 50%,
      hsl(30deg 51% 45%) 100%
    );
  }

  &.rock {
    background-image: linear-gradient(
      45deg,
      hsl(0deg 0% 62%) 0%,
      hsl(60deg 1% 56%) 50%,
      hsl(60deg 1% 50%) 100%
    );
  }

  &.fairy {
    background-image: linear-gradient(
      45deg,
      hsl(291deg 79% 81%) 0%,
      hsl(291deg 81% 80%) 50%,
      hsl(291deg 83% 79%) 100%
    );
  }

  &.poison {
    background-image: linear-gradient(
      45deg,
      hsl(280deg 54% 52%) 0%,
      hsl(279deg 64% 51%) 50%,
      hsl(278deg 75% 50%) 100%
    );
  }

  &.bug {
    background-image: linear-gradient(
      45deg,
      hsl(81deg 49% 50%) 0%,
      hsl(82deg 46% 50%) 50%,
      hsl(83deg 43% 49%) 100%
    );
  }

  &.dragon {
    background-image: linear-gradient(
      45deg,
      hsl(0deg 80% 18%) 0%,
      hsl(357deg 83% 34%) 50%,
      hsl(0deg 90% 52%) 100%
    );
  }

  &.psychic {
    background-image: linear-gradient(
      45deg,
      hsl(62deg 83% 45%) 0%,
      hsl(63deg 55% 55%) 50%,
      hsl(62deg 41% 60%) 100%
    );
  }

  &.fighting {
    background-image: linear-gradient(
      45deg,
      hsl(40deg 36% 65%) 0%,
      hsl(40deg 44% 66%) 50%,
      hsl(40deg 53% 68%) 100%
    );
  }

  &.ghost {
    background-image: linear-gradient(
      45deg,
      hsl(0deg 9% 21%) 0%,
      hsl(360deg 9% 25%) 50%,
      hsl(0deg 9% 30%) 100%
    );
  }

  &.dark {
    background-image: linear-gradient(
      45deg,
      hsl(0deg 0% 0%) 0%,
      hsl(259deg 49% 18%) 50%,
      hsl(262deg 33% 30%) 100%
    );
  }

  &.flying,
  &.normal {
    background-color: #e9e9e9;
  }
`;
