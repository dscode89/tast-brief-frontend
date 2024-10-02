import styled from "styled-components";

export const TwoColumnedLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(50%, 50%) minmax(50%, 50%);
  grid-template-rows: 1fr;
  height: 100vh;

  > :first-child {
    grid-column: 1;
  }

  > :last-child {
    grid-column: 2;
  }
`;
