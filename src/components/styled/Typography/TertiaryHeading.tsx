import styled from "styled-components";

export const TertiaryHeader = styled.h3<{ $size: number; $color: string }>`
  font-size: ${(props) => props.$size}rem;
  color: ${(props) => props.$color};
  margin-bottom: 0.75em;
`;
