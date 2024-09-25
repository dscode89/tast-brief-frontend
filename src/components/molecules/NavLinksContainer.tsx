import { NavLinks } from "./NavLinks";

interface NavLinksContainerProps {
  linkList: { name: string; href: string }[];
  linkColor: string;
  linkHoverColor: string;
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
