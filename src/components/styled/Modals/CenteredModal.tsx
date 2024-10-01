import styled from "styled-components";

export const CenteredModal = styled.dialog<{ $widthPx: number }>`
  height: 300px;
  width: ${(props) => props.$widthPx}px;
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
