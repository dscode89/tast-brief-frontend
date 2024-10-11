import styled from "styled-components";

export const VerticalFormWrapper = styled.form<{ $viewPortWidth: number }>`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 1.2em;
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    props.$viewPortWidth <= 950
      ? props.$viewPortWidth <= 450
        ? "95"
        : "70"
      : "85"}%;
  justify-content: center;
  align-items: start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #ffffff;
  margin: 20px 5px;
`;
