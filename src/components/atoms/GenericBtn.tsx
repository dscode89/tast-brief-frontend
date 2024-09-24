import { Button } from "../styled/Button";

interface NavBtnProps {
  children: React.ReactNode;
  color: string;
}

export const GenericBtn = ({ children, color }: NavBtnProps) => {
  return <Button $bgcolor={color}>{children}</Button>;
};
