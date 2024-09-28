import { FooterSectionTemplate } from "../../styled/Footer/FooterSectionTemplate";

interface FooterAddressSection {
  children: React.ReactNode;
}

export const FooterAddressSection = ({ children }: FooterAddressSection) => {
  return (
    <FooterSectionTemplate $leftSideBorder>{children}</FooterSectionTemplate>
  );
};
