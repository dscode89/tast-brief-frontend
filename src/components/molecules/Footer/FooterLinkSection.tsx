import { FooterSectionTemplate } from "../../styled/Footer/FooterSectionTemplate";

interface FooterLinkSectionProps {
  children: React.ReactNode;
}

export const FooterLinkSection = ({ children }: FooterLinkSectionProps) => {
  return (
    <FooterSectionTemplate $leftSideBorder={false}>
      {children}
    </FooterSectionTemplate>
  );
};
