import { FC } from "react";
import { PageHeader } from "../../atoms/PageHeader";
import { LogoContainer } from "../../atoms/LogoContainer";
import { PrimaryBtn } from "../../atoms/PrimaryBtn";
import { NavLinksContainer } from "../../molecules/NavLinksContainer";

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
  return (
    <PageHeader bgcolor={headerBgColor}>
      <LogoContainer imgSrc={logoInfo.src} width={100} />
      <NavLinksContainer
        linkList={navLinks}
        linkColor={linkColor}
        linkHoverColor={linkHoverColor}
      />
      <PrimaryBtn color="#000000" bgcolor="#ffd1dc">
        Sign Up
      </PrimaryBtn>
    </PageHeader>
  );
};
