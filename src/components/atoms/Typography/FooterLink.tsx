import { ListLink } from "../../styled/ListLink/ListLink";
import { NavLinkProps } from "../NavLink";

export const FooterLink = ({ href, name, color, hoverColor }: NavLinkProps) => {
  return (
    <ListLink
      href={href}
      $color={color}
      $fontSize={0.3}
      $hoverColor={hoverColor}
    >
      {name}
    </ListLink>
  );
};
