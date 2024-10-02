import styled from "styled-components";

export const SecondaryHeader = styled.h2<{ $size: number; $color: string }>`
  font-size: ${(props) => props.$size}rem;
  color: ${(props) => props.$color};
  margin-bottom: 0.75em;

  @media (max-width: 850px) {
    font-size: calc(${(props) => props.$size - 1.5}rem + 1vw);
  }
`;

// try and understand what this is doing
