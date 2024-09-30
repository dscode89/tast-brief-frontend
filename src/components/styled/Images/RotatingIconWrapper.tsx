import { styled, keyframes, css } from "styled-components";

const openBurgerAnimation = keyframes<{ $deg: number }>`
  0% {
  transform: rotate(0deg)
  }

  100% {
  transform: rotate(-90deg)
  }
`;

const closeBurgerAnimation = keyframes<{ $deg: number }>`
  0% {
  transform: rotate(-90deg)
  }

  100% {
  transform: rotate(0deg)
  }
`;

export const RotatingIconWrapper = styled.div<{
  $fontSize: string;
  $color: string;
  $deg: number;
  $isClicked: boolean;
}>`
  font-size: ${(props) => props.$fontSize}rem;
  color: ${(props) => props.$color};
  padding: 0.25em;
  transition: color 0.5s ease;

  ${(props) =>
    props.$isClicked
      ? css`
          animation: ${openBurgerAnimation} 0.5s forwards;
        `
      : css`
          animation: ${closeBurgerAnimation} 0.5s forwards;
        `};

  &:hover {
    cursor: pointer;
  }
`;
