import styled from "styled-components";

export const Hero = styled.div<{ $src: string }>`
  height: 500px;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: bottom;
`;
