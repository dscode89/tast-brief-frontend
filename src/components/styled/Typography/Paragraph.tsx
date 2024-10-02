import styled from "styled-components";

export const Paragraph = styled.p<{
  $fontSize: number;
  $fontWeight: number | string;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize}rem;
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => (props.$color ? props.$color : "#000000")};
  margin-bottom: 1.4em;
  width: 60%;
  padding: 0.75em;
`;
