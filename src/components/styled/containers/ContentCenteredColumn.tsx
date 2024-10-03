import styled, { css, keyframes } from "styled-components";

const ColumnSlideLeft = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
   
  }
`;

const ColumnSlideRight = keyframes`
0% {
    transform: translateX(-100%);
    opacity: 0;
  
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
   
  }
`;

export const ContentCenteredColumn = styled.div<{
  $shouldAnimate: boolean;
  $animateDirection: "left" | "right";
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform, opacity 1s ease-in-out;
  ${(props) =>
    props.$shouldAnimate
      ? props.$animateDirection === "left"
        ? css`
            animate: ${ColumnSlideLeft} 1s ease-in;
          `
        : css`
            animate: ${ColumnSlideRight} 1s ease-in;
          `
      : null}
  animation: ${ColumnSlideLeft} 1s ease-in;
`;
