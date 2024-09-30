import styled, { css, keyframes } from "styled-components";

export const BurgerMenuSlideInLeft = keyframes`
0% {
   transform: translateX(100%);
   opacity: 0;
  }
100% {
   transform: translateX(0%);
   opacity: 1;
}      
`;

export const BurgerMenuSlideOutRight = keyframes`
0% {
   transform: translateX(0%);
   opacity: 1;
  }
100% {
   transform: translateX(100%);
   opacity: 0;
}      
`;

export const VerticalBurgerlNavlinkList = styled.div<{
  $bgColor?: string;
  $isActive: boolean;
  $shouldAnimate: boolean;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$bgColor};
  translate: transform, opacity 0.5s ease-in;

  ${(props) =>
    props.$shouldAnimate
      ? props.$isActive
        ? css`
            animation: ${BurgerMenuSlideInLeft} 0.5s forwards;
          `
        : css`
            animation: ${BurgerMenuSlideOutRight} 0.5s forwards;
          `
      : ""}

  right: 0;
  top: 150px;
  z-index: 2;
  padding: 1.2em;
  font-size: 1.3rem;
`;
