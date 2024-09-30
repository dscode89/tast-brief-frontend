import styled from "styled-components";

export const IconWrapper = styled.div<{ $fontSize: string; $color: string }>`
  font-size: ${(props) => props.$fontSize}rem;
  color: ${(props) => props.$color};
  padding: 0.25em;

  &:hover {
    cursor: pointer;
  }
`;
