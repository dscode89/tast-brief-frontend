import styled from "styled-components";

export const Hero = styled.div<{ $src: string; $height: number }>`
  height: ${(props) => props.$height}px;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: bottom;
  position: relative;
`;
