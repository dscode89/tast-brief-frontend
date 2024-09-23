import styled from "styled-components";

export const ImageContainer = styled.img<{
  width: number;
}>`
  width: ${(props) => props.width};
`;
