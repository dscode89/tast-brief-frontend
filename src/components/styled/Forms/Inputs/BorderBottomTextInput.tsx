import styled from "styled-components";

export const BorderBottomTextInput = styled.input<{
  $isValid: boolean;
  $isActive: boolean;
}>`
  height: 40px;
  width: 90%;
  margin-bottom: 0.8em;
  border: none;
  position: relative;
  border-bottom: 2px solid
    ${(props) =>
      props.$isActive ? (props.$isValid ? "#5dbea3" : "#FAA0A0") : "#808080"};
  outline: none;
  font-size: 1.2rem;
  padding: 0.25em;
`;
