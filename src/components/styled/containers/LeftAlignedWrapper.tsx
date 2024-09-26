import styled from "styled-components";

export const LeftAlignedWrapper = styled.div<{ $flexDirection: string }>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: start;
  justify-content: space-around;
`;
