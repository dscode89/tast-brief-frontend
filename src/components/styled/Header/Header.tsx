import styled from "styled-components";

export const Header = styled.header<{ $bgcolor: string }>`
  background-color: ${(props) => props.$bgcolor};
  height: 150px;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
