import { SecondaryHeader } from "../../styled/Typography/SecondaryHeading";
import { HeaderProps } from "./HeadingPrimary";

export const HeadingSecondary = ({
  fontSizeRem,
  children,
  color,
}: HeaderProps) => {
  return (
    <SecondaryHeader $size={fontSizeRem} $color={color}>
      {children}
    </SecondaryHeader>
  );
};
