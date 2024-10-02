import { StyledNavLink } from "../../styled/Header/StyledNavLink";

export interface NavLinkProps {
  href?: string;
  name: string;
  color: string;
  hoverColor: string;
}

export const NavLink = ({ href, name, color, hoverColor }: NavLinkProps) => {
  return (
    <StyledNavLink
      href={href}
      $color={color}
      $fontSize={1.3}
      $hoverColor={hoverColor}
    >
      {name}
    </StyledNavLink>
  );
};
