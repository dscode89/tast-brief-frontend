import { NavLinkList } from "../styled/Header/NavLinkList";
import { NavLink } from "../atoms/NavLink";
import { v4 as uuidv4 } from "uuid";

interface NavLinksProps {
  linkList: { name: string; href: string }[];
  linkColor: string;
  linkHoverColor: string;
}

export const NavLinks = ({
  linkList,
  linkColor,
  linkHoverColor,
}: NavLinksProps) => {
  return (
    <NavLinkList>
      {linkList.map((link) => {
        return (
          <NavLink
            href={link.href}
            name={link.name}
            key={uuidv4()}
            color={linkColor}
            hoverColor={linkHoverColor}
          />
        );
      })}
    </NavLinkList>
  );
};
