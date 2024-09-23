import { FC } from "react";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: FC<HeaderProps> = styled.header`
  background-color: transparent;
  border-bottom: 1px solid grey;
  height: 150px;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
