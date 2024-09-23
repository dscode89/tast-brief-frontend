import styled from "styled-components";

interface BtnProps {
  children: React.ReactNode;
  $bgcolor: string;
}

const Button = styled.button<{ $bgcolor: string }>`
  padding: 0.5em 2.6em;
  background-color: ${(props) => props.$bgcolor};
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
`;

export const NavBtn = ({ children, $bgcolor }: BtnProps) => {
  return <Button $bgcolor={$bgcolor}>{children}</Button>;
};
