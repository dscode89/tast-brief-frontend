import styled from "styled-components";

export const DynamicFlexAlignmentColumn = styled.div<{
  $alignment: "start" | "center" | "end";
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: ${(props) => props.$alignment};
  margin-top: 20px;
`;
