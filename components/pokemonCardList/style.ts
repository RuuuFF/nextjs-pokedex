import styled from "styled-components";

export const Button = styled.button`
  background-color: #f7c600;
  font-weight: 600;
  font-size: 2rem;
  color: #20336e;
  padding: 1rem 2.4rem;
  border: 0;
  border-radius: 0 2.4rem;
  box-shadow: 2px 2px 15px #00000055;
  opacity: 1;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 15px #00000077;
  }

  &:active {
    transform: scale(0.98);
  }
`;
