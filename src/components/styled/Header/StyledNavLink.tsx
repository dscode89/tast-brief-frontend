import styled from "styled-components";

export const StyledNavLink = styled.a<{
  $color: string;
  $fontSize: number;
  $hoverColor: string;
}>`
  margin: 0 10px;
  font-size: ${(props) => props.$fontSize}rem;
  color: ${(props) => props.$color};
  text-decoration: none;
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.$hoverColor};
    text-decoration: underline;
  }
  &:active {
    color: red;
  }
`;
