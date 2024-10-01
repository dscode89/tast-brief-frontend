import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";

export interface PrimaryBtnProps {
  children: React.ReactNode;
  color: string;
  bgcolor: string;
  hoverBgColor: string;
  onClick: () => void;
}

export const PrimaryBtn = ({
  children,
  color,
  bgcolor,
  hoverBgColor,
  onClick,
}: PrimaryBtnProps) => {
  return (
    <PrimaryButton
      $bgcolor={bgcolor}
      $color={color}
      $hoverBgColor={hoverBgColor}
      onClick={onClick}
    >
      {children}
    </PrimaryButton>
  );
};
