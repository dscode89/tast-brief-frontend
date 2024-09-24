import styled from "styled-components";

export const StyledNavLink = styled.a`
  margin: 0 10px;
  font-family: helvetica;
  font-size: 1.3rem;
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    cursor: pointer;
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`;
