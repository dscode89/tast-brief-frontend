import styled from "styled-components";

//THIS NEEDS TO BE CHANGED AS BLUE EVENT ISNT REACTIVE
export const StyledSelectDropdownBox = styled.select<{
  $isValid: boolean;
  $grouped: boolean;
}>`
  background-color: #ffffff;
  color: ${(props) => (props.$isValid ? "#5dbea3" : "#000000")};
  fontweight: 600;
  border: 2px solid ${(props) => (props.$isValid ? "#5dbea3" : "#000000")};
  padding: 0.5em;
  margin-right: ${(props) => (props.$grouped ? "0.5em" : "0em")};
  margin-top: 0.25em;
  outline: none;
  cursor: pointer;
  max-width: 85%;
`;
