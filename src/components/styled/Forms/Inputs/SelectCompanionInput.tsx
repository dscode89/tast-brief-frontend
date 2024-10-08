import styled from "styled-components";

export const SelectElementCompanionInput = styled.input<{
  $isActive: boolean;
  $isValid: boolean;
}>`
  width: 100%;
  margin-left: 4px;
  outline: none;
  border: 2px solid
    ${(props) =>
      props.$isActive ? (props.$isValid ? "#5dbea3" : "#FAA0A0") : "#000000"};
  border-radius: 2px;
  color: ${(props) =>
    props.$isActive ? (props.$isValid ? "#5dbea3" : "#FAA0A0") : "#000000"};
  height: 34.33px;
  padding: 0 0.25em;
  font-weight: 600;
`;
