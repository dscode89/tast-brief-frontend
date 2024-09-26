import { QuarternaryHeader } from "../../styled/Typography/QuarternaryHeading";
import { HeaderProps } from "./HeadingPrimary";

export const HeadingQuarternary = ({
  fontSizeRem,
  children,
  color,
}: HeaderProps) => {
  return (
    <QuarternaryHeader $size={fontSizeRem} $color={color}>
      {children}
    </QuarternaryHeader>
  );
};
