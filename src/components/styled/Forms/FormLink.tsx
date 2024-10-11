import styled from "styled-components";

export const FormLink = styled.a<{
  $fontSize: number;
  $color?: string;
  $hoverColor?: string;
}>`
  font-size: ${(props) => props.$fontSize}em;
  text-decoration: none;
  color: ${(props) => props.$color};
  margin-top: 0.3em;
  width: 100%;
  text-align: center;
  &:hover {
    text-decoration: underline;
    pointer: cursor;
    text-align: center;
    color: ${(props) => props.$hoverColor};
  }
`;
