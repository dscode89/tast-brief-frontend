import { FC } from "react";
import styled from "styled-components";
import { StyledNavLink } from "../atoms/NavLink";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface NavSectionProps {
  children?: React.ReactNode;
  $linkList: { name: string; href: string }[];
}

const NavLinkWrapper: FC<NavSectionProps> = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 0.5em;
  margin: 0 1.5em;
`;

export const NavLinkContainer = ({ $linkList }: NavSectionProps) => {
  return (
    <NavLinkWrapper $linkList={$linkList}>
      <ul
        style={{
          display: "flex",
          padding: "1em",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {$linkList.map((link) => {
          return (
            <li style={{ listStyle: "none" }} key={uuidv4()}>
              <StyledNavLink href={link.href}>{link.name}</StyledNavLink>
            </li>
          );
        })}
      </ul>
    </NavLinkWrapper>
  );
};
