import styled from "styled-components";

export const Button = styled.button<{ $bgcolor: string }>`
  width: 180px;
  padding: 1em 0;
  background-color: ${(props) => props.$bgcolor};
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
