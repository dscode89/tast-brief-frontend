import { FC, useState } from "react";
import { Header } from "../../atoms/Header";
import { ImageContainer } from "../../atoms/ImgContainer";
import { NavLinkContainer } from "../../molecules/NavLinkContainer";
import { GenericBtn } from "../../atoms/GenericBtn";

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
      <NavLinkContainer $linkList={navLinks}></NavLinkContainer>
      <GenericBtn color="white">Sign Up</GenericBtn>
    </Header>
  );
};
