import { GiHamburgerMenu } from "react-icons/gi";
import { NavLinksContainerProps } from "./NavLinksContainer";
import { RotatingIconWrapper } from "../../styled/Images/RotatingIconWrapper";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { VerticalBurgerlNavlinkList } from "../../styled/Header/VerticalBurgerNavLinkList";
import { NavLink } from "../../atoms/NavLink";

export const NavLinkBurgerMenu = ({
  linkList,
  linkColor,
  linkHoverColor,
  dropDownMenuBgColor,
}: NavLinksContainerProps) => {
  const [isClicked, setIsClicked] = useState(false);
  // this state is useful as it stop the animation running first time
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <>
      <RotatingIconWrapper
        onClick={() => {
          setIsClicked((current) => !current);
          setShouldAnimate(true);
        }}
        $fontSize="2.5"
        $color="#ffd1dc"
        $deg={90}
        $isClicked={isClicked}
        $shouldAnimate={shouldAnimate}
      >
        <GiHamburgerMenu />
      </RotatingIconWrapper>

      {isClicked ? (
        <VerticalBurgerlNavlinkList
          $bgColor={dropDownMenuBgColor}
          $isActive={isClicked}
          $shouldAnimate={shouldAnimate}
        >
          <ul>
            {linkList.map((link) => {
              return (
                <li style={{ listStyle: "none" }} key={uuidv4()}>
                  <NavLink
                    href={link.href}
                    name={link.name}
                    color={linkColor}
                    hoverColor={linkHoverColor}
                  />
                </li>
              );
            })}
          </ul>
        </VerticalBurgerlNavlinkList>
      ) : shouldAnimate ? (
        <VerticalBurgerlNavlinkList
          $bgColor={dropDownMenuBgColor}
          $isActive={isClicked}
          $shouldAnimate={shouldAnimate}
        >
          <ul>
            {linkList.map((link) => {
              return (
                <li style={{ listStyle: "none" }} key={uuidv4()}>
                  <NavLink
                    href={link.href}
                    name={link.name}
                    color={linkColor}
                    hoverColor={linkHoverColor}
                  />
                </li>
              );
            })}
          </ul>
        </VerticalBurgerlNavlinkList>
      ) : null}
    </>
  );
};
