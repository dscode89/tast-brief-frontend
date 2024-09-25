import { Header } from "../styled/Header";

interface PageHeaderProps {
  bgcolor: string;
  children: React.ReactNode;
}

export const PageHeader = ({ bgcolor, children }: PageHeaderProps) => {
  return <Header $bgcolor={bgcolor}>{children}</Header>;
};
