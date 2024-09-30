import { GiHamburgerMenu } from "react-icons/gi";
// import { IconWrapper } from "../../styled/Images/IconWrapper";
import { RotatingIconWrapper } from "../../styled/Images/RotatingIconWrapper";
import { useState } from "react";

export const NavLinkBurgerMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  console.log(isClicked);
  return (
    <RotatingIconWrapper
      onClick={() => setIsClicked((current) => !current)}
      $fontSize="2.5"
      $color="#ffd1dc"
      $deg={90}
      $isClicked={isClicked}
    >
      <GiHamburgerMenu />
    </RotatingIconWrapper>
  );
};
