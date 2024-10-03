import styled from "styled-components";

export const QuarternaryHeader = styled.h4<{ $size: number; $color: string }>`
  font-size: ${(props) => props.$size}rem;
  color: ${(props) => props.$color};
`;
