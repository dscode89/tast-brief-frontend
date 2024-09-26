import styled from "styled-components";

export const PrimaryHeader = styled.h1<{ $size: number; $color: string }>`
  font-size: ${(props) => props.$size}rem;
  color: ${(props) => props.$color};
`;
