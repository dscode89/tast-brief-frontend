import { FC } from "react";
import { Header } from "../../atoms/Header";
import { ImageContainer } from "../../atoms/ImgContainer";
import { NavLinkContainer } from "../../molecules/NavLinkContainer";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GenericBtn } from "../../atoms/Button";

interface HeaderWithNavigationProps {
  logoInfo: {
    src: string;
    width: number;
  };
  navLinks: { href: string; name: string }[];
}

export const HeaderWithNavigation: FC<HeaderWithNavigationProps> = ({
  logoInfo,
  navLinks,
}) => {
  return (
    <Header>
      <ImageContainer src={logoInfo.src} width={logoInfo.width} />
      <NavLinkContainer isCollapsed={false}>
        {navLinks.map((linkInfo) => {
          return (
            <div key={uuidv4()}>
              <NavLink to={linkInfo.href}>{linkInfo.name}</NavLink>
            </div>
          );
        })}
      </NavLinkContainer>
      <GenericBtn $bgcolor="transparent">Button</GenericBtn>
    </Header>
  );
};
