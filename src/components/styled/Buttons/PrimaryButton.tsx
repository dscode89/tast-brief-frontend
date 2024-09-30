import styled from "styled-components";

export const PrimaryButton = styled.button<{
  $bgcolor: string;
  $color: string;
}>`
  width: 180px;
  padding: 1em 0;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgcolor};
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: background-color, transform 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #ffdee6;
  }
`;
