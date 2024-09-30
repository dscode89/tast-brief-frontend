import styled from "styled-components";

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  max-width: 300px;

  @media (max-width: 590px) {
    border-bottom: 1px solid #ffd1dc;
    margin-bottom: 1em;
  }
`;
