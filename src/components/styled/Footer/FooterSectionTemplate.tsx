import styled from "styled-components";

export const FooterSectionTemplate = styled.div<{ $leftSideBorder: boolean }>`
  width: 50%;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: transparent;
  border-left: ${(props) => (props.$leftSideBorder ? "1px solid black" : "")};

  @media (max-width: 850px) {
    border-top: ${(props) => (props.$leftSideBorder ? "1px solid black" : "")};
    border-left: none;
    justify-content: space-around;
    width: 100%;
  }
`;
