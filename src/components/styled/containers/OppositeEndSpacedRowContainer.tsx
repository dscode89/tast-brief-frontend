import styled from "styled-components";

export const OppositeEndSpacedRowContainer = styled.div<{ $width: number }>`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  width: ${(props) => props.$width}%;
  justify-content: space-between;
`;
