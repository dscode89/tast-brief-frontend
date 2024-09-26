import styled from "styled-components";

export const ListLink = styled.a<{
  $color: string;
  $fontSize: number;
  $hoverColor: string;
}>`
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize};

  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`;
