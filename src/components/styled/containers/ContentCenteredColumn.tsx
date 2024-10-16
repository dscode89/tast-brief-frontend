import styled, { css, keyframes } from "styled-components";

const ColumnSlideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  
  }

  100% {
    transform: translateY(0%);
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
  $animateDirection?: "up" | "right";
  $width?: number;
}>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px
  transition: transform, opacity 1s ease-in-out;
  ${(props) =>
    props.$width! > 950
      ? props.$shouldAnimate
        ? props.$animateDirection === "up"
          ? css`
              animation: ${ColumnSlideUp} 0.5s ease-in;
            `
          : css`
              animation: ${ColumnSlideRight} 0.5s ease-in;
            `
        : null
      : null}
`;
