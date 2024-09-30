import { NavLinks } from "./NavLinks";
import { useState, useEffect } from "react";

export interface NavLinksContainerProps {
  linkList: { name: string; href: string }[];
  linkColor: string;
  linkHoverColor: string;
  dropDownMenuBgColor?: string;
}

export const NavLinksContainer = ({
  linkList,
  linkColor,
  linkHoverColor,
}: NavLinksContainerProps) => {
  return (
    <NavLinks
      linkList={linkList}
      linkColor={linkColor}
      linkHoverColor={linkHoverColor}
    />
  );
};
