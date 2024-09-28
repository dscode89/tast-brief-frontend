import styled from "styled-components";

export const FooterSectionTemplate = styled.div<{ $leftSideBorder: boolean }>`
  width: 50%;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: transparent;
  border-left: ${(props) => (props.$leftSideBorder ? "1px solid black" : "")};
`;
