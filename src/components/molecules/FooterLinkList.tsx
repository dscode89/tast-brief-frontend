import { ProductColumn } from "../styled/ProductColumn";
import { HeadingTertiary } from "../atoms/Typography/HeadingTertiary";
import { NavLinkProps } from "../atoms/NavLink";
import { ListLinkWrapper } from "../styled/ListLink/ListLinkWrapper"; // I don't like the name of this component
import { FooterLink } from "../atoms/Typography/FooterLink";

interface FooterLinkListProps {
  heading: string;
  links: NavLinkProps[];
}

export const FooterLinkList = ({ heading, links }: FooterLinkListProps) => {
  return (
    <ProductColumn>
      <HeadingTertiary color="#000000" fontSizeRem={1}>
        {heading}
      </HeadingTertiary>
      <ListLinkWrapper $flexDirection="column" $align="start">
        {links.map((link) => {
          return (
            <li style={{ listStyle: "none" }}>
              <FooterLink
                href={link.href}
                color="#000000"
                hoverColor="red"
                name={link.name}
              />
            </li>
          );
        })}
      </ListLinkWrapper>
    </ProductColumn>
  );
};
