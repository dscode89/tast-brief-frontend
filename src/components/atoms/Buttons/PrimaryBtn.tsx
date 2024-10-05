import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";

export interface PrimaryBtnProps {
  children: React.ReactNode;
  color: string;
  bgcolor: string;
  hoverBgColor: string;
  isDisabled: boolean;
  onClick: () => void;
}

export const PrimaryBtn = ({
  children,
  color,
  bgcolor,
  hoverBgColor,
  isDisabled,
  onClick,
}: PrimaryBtnProps) => {
  return (
    <PrimaryButton
      $bgcolor={bgcolor}
      $color={color}
      $hoverBgColor={hoverBgColor}
      $isDisabled={isDisabled}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </PrimaryButton>
  );
};
