import { PrimaryButton } from "../styled/PrimaryButton";

interface NavBtnProps {
  children: React.ReactNode;
  color: string;
  bgcolor: string;
}

export const PrimaryBtn = ({ children, color, bgcolor }: NavBtnProps) => {
  return (
    <PrimaryButton $bgcolor={bgcolor} $color={color}>
      {children}
    </PrimaryButton>
  );
};
