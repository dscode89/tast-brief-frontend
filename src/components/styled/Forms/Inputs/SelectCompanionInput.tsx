import styled from "styled-components";

export const SelectElementCompanionInput = styled.input<{
  $isActive: boolean;
  $isValid: boolean;
  $placement: "right" | "underneath";
}>`
  width: 85%;
  margin-left: ${(props) => (props.$placement === "right" ? "4px" : "0px")};
  margin-top: ${(props) =>
    props.$placement === "underneath" ? "10px" : "0px"};
  outline: none;
  border: 2px solid
    ${(props) =>
      props.$isActive ? (props.$isValid ? "#5dbea3" : "#FAA0A0") : "#000000"};
  border-radius: 2px;
  color: ${(props) =>
    props.$isActive ? (props.$isValid ? "#5dbea3" : "#FAA0A0") : "#000000"};
  height: 35px;
  padding: 0 0.25em;
  font-weight: 600;
`;
