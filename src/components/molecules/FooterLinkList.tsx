import { FooterListColumn } from "../styled/Footer/FooterListColumn";
import { HeadingTertiary } from "../atoms/Typography/HeadingTertiary";
import { NavLinkProps } from "../atoms/NavLink";
import { FooterLink } from "../atoms/Typography/FooterLink";
import { v4 as uuidv4 } from "uuid";

interface FooterLinkListProps {
  heading: string;
  links: NavLinkProps[];
}

export const FooterLinkList = ({ heading, links }: FooterLinkListProps) => {
  return (
    <FooterListColumn>
      <HeadingTertiary color="#000000" fontSizeRem={1}>
        {heading}
      </HeadingTertiary>
      {/* <ListLinkWrapper $flexDirection="column" $align="start"> */}
      <ul>
        {" "}
        {links.map((link) => {
          return (
            <li style={{ listStyle: "none" }} key={uuidv4()}>
              <FooterLink
                href={link.href}
                color="#000000"
                hoverColor="red"
                name={link.name}
              />
            </li>
          );
        })}
      </ul>

      {/* </ListLinkWrapper> */}
    </FooterListColumn>
  );
};
