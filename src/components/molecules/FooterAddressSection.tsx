import { FooterAddressTemplate } from "../organisms/Footer/FooterAddressTemplate";

interface FooterAddressSection {
  children: React.ReactNode;
}

export const FooterAddressSection = ({ children }: FooterAddressSection) => {
  return <FooterAddressTemplate>{children}</FooterAddressTemplate>;
};
