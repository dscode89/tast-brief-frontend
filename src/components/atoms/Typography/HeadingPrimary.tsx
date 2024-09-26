import { PrimaryHeader } from "../../styled/Typography/PrimaryHeading";

export interface HeaderProps {
  fontSizeRem: number;
  color: string;
  children: React.ReactNode;
}

export const HeadingPrimary = ({
  fontSizeRem,
  children,
  color,
}: HeaderProps) => {
  return (
    <PrimaryHeader $size={fontSizeRem} $color={color}>
      {children}
    </PrimaryHeader>
  );
};
