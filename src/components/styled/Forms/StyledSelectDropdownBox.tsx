import styled from "styled-components";

export const StyledSelectDropdownBox = styled.select<{ $isValid: boolean }>`
  background-color: #ffffff;
  color: ${(props) => (props.$isValid ? "#5dbea3" : "#FAA0A0")};
  fontweight: 600;
  border: 2px solid ${(props) => (props.$isValid ? "#5dbea3" : "#FAA0A0")};
  padding: 0.5em;
  margin-right: 0.5em;
  margin-top: 0.25em;
  outline: none;
  cursor: pointer;
`;
