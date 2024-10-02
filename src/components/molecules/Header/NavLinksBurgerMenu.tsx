import { GiHamburgerMenu } from "react-icons/gi";
import { NavLinksContainerProps } from "./NavLinksContainer";
import { RotatingIconWrapper } from "../../styled/Images/RotatingIconWrapper";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { VerticalBurgerlNavlinkList } from "../../styled/Header/VerticalBurgerNavLinkList";
import { NavLink } from "../../atoms/Links/NavLink";
import { FixedWhiteOpaqueOverlay } from "../../styled/containers/FixedOpaqueOverlay";
import { CenteredModal } from "../../styled/Modals/CenteredModal";
import { ModalForm } from "../Forms/ModalForm";
import { PrimaryBtn } from "../../atoms/Buttons/PrimaryBtn";

export const NavLinkBurgerMenu = ({
  linkList,
  linkColor,
  linkHoverColor,
  dropDownMenuBgColor,
}: NavLinksContainerProps) => {
  const [isActive, setIsActive] = useState(false);
  // this state is useful as it stop the animation running first time
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [modalIsActive, setModalIsActive] = useState(false);

  const updatedLinkList = [...linkList, { href: "", name: "Connect" }];
  console.log(modalIsActive);

  if (modalIsActive) {
    return (
      <>
        <FixedWhiteOpaqueOverlay>
          <CenteredModal $widthPx={400} $bgColor="#ffffff">
            <h3>Join Mailing List!</h3>
            <ModalForm />
            <PrimaryBtn
              color="white"
              bgcolor="#000000"
              hoverBgColor="#36454F"
              onClick={() => {
                setModalIsActive((current) => !current);
              }}
            >
              Close
            </PrimaryBtn>
          </CenteredModal>
        </FixedWhiteOpaqueOverlay>
      </>
    );
  }

  return (
    <>
      <RotatingIconWrapper
        onClick={() => {
          setIsActive((current) => !current);
          setShouldAnimate(true);
        }}
        $fontSize="2.5"
        $color="#ffd1dc"
        $deg={90}
        $isActive={isActive}
        $shouldAnimate={shouldAnimate}
      >
        <GiHamburgerMenu />
      </RotatingIconWrapper>

      {isActive ? (
        <VerticalBurgerlNavlinkList
          $bgColor={dropDownMenuBgColor}
          $isActive={isActive}
          $shouldAnimate={shouldAnimate}
        >
          <ul>
            {updatedLinkList.map((link) => {
              return (
                <li
                  style={{ listStyle: "none" }}
                  key={uuidv4()}
                  onClick={
                    link.name === "Connect"
                      ? () => {
                          setModalIsActive(true);
                        }
                      : () => {}
                  }
                >
                  {link.name === "Connect" ? (
                    <NavLink name={link.name} color="#ffd1dc" hoverColor="" />
                  ) : (
                    <NavLink
                      href={link.href}
                      name={link.name}
                      color={link.name === "Connect" ? "#ffd1dc" : linkColor}
                      hoverColor={link.name === "Connect" ? "" : linkHoverColor}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </VerticalBurgerlNavlinkList>
      ) : shouldAnimate ? (
        <VerticalBurgerlNavlinkList
          $bgColor={dropDownMenuBgColor}
          $isActive={isActive}
          $shouldAnimate={shouldAnimate}
        >
          <ul>
            {updatedLinkList.map((link) => {
              return (
                <li style={{ listStyle: "none" }} key={uuidv4()}>
                  <NavLink
                    href={link.href}
                    name={link.name}
                    color={link.name === "Connect" ? "#ffd1dc" : linkColor}
                    hoverColor={link.name === "Connect" ? "" : linkHoverColor}
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
