import { FC } from "react";
import { PageHeader } from "../../atoms/Header/PageHeader";
import { ImageWrapper } from "../../atoms/Images/ImageWrapper";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";
import { NavLinksContainer } from "../../molecules/Header/NavLinksContainer";
import { NavLinkBurgerMenu } from "../../molecules/Header/NavLinksBurgerMenu";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

interface HeaderWithNavigationProps {
  logoInfo: {
    src: string;
    width: number;
  };
  navLinks: { href: string; name: string }[];
  linkColor: string;
  linkHoverColor: string;
  headerBgColor: string;
}

export const HeaderWithNavigation: FC<HeaderWithNavigationProps> = ({
  logoInfo,
  navLinks,
  linkColor,
  linkHoverColor,
  headerBgColor,
}) => {
  const { width } = useWindowDimensions();

  return (
    <PageHeader bgcolor={headerBgColor}>
      <ImageWrapper imgSrc={logoInfo.src} width={100} />
      {width <= 950 ? (
        <NavLinkBurgerMenu
          linkList={navLinks}
          linkColor={linkColor}
          linkHoverColor={linkHoverColor}
          dropDownMenuBgColor="#000000"
        />
      ) : (
        <div style={{ display: "flex" }}>
          <nav style={{ width: "100%" }}>
            <NavLinksContainer
              linkList={navLinks}
              linkColor={linkColor}
              linkHoverColor={linkHoverColor}
            />
          </nav>

          <PrimaryBtn color="#000000" bgcolor="#ffd1dc">
            Join
          </PrimaryBtn>
        </div>
      )}
    </PageHeader>
  );
};
