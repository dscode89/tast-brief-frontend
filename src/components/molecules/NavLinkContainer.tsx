import { FC } from "react";
import styled from "styled-components";

interface NavSectionProps {
  isCollapsed: boolean;
  children: React.ReactNode;
}

export const NavLinkContainer: FC<NavSectionProps> = styled.nav`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  color: green;
`;
