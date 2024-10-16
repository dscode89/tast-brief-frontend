import styled from "styled-components";

export const FooterTemplate = styled.footer<{ $bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2em;
  background-color: ${(props) => props.$bgColor};

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
