import styled from "styled-components";

export const CenteredModal = styled.dialog<{
  $widthPx: number;
  $bgColor: string;
}>`
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  width: ${(props) => props.$widthPx}px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.75em;
`;
