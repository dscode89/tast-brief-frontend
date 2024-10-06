import styled from "styled-components";

export const InputFieldIconWrapper = styled.p<{ $color: string }>`
  position: absolute;
  top: 25px;
  right: 20px;
  transform: rotate(10deg);
  color: ${(props) => props.$color};
`;
