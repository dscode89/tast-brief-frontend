import styled from "styled-components";

export const AbsoluteOpaqueOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
