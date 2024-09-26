import styled from "styled-components";

export const FooterTemplate = styled.footer<{ $bgColor: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em;
  background-color: ${(props) => props.$bgColor};
`;
