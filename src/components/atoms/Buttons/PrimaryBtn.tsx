import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";

export interface PrimaryBtnProps {
  children: React.ReactNode;
  color: string;
  bgcolor: string;
  onClick: () => void;
}

export const PrimaryBtn = ({
  children,
  color,
  bgcolor,
  onClick,
}: PrimaryBtnProps) => {
  return (
    <PrimaryButton $bgcolor={bgcolor} $color={color} onClick={onClick}>
      {children}
    </PrimaryButton>
  );
};
