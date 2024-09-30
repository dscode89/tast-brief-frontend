import styled from "styled-components";

export const VerticalBurgerlNavlinkList = styled.div<{ $bgColor: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$bgColor};
  right: 0;
  top: 150px;
  z-index: 2;
  padding: 1.2em;
  font-size: 1.3rem;
`;
