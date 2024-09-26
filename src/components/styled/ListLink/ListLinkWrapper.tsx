import styled from "styled-components";

export const ListLinkWrapper = styled.ul<{
  $flexDirection: string;
  $align: "start" | "center" | "end";
}>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: space-around;
  align-items: ${(props) => props.$align};
`;
