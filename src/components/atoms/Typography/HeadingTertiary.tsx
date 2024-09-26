import { TertiaryHeader } from "../../styled/Typography/TertiaryHeading";
import { HeaderProps } from "./HeadingPrimary";

export const HeadingTertiary = ({
  fontSizeRem,
  children,
  color,
}: HeaderProps) => {
  return (
    <TertiaryHeader $size={fontSizeRem} $color={color}>
      {children}
    </TertiaryHeader>
  );
};
