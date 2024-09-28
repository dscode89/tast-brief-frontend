import { FooterLinkList } from "../../molecules/FooterLinkList";
import { mockFooterAboutLinks } from "../../../mock-data/MockFooterLinksAbout";
import { mockContactDetails } from "../../../mock-data/mockContactDetails";
import { FooterTemplate } from "../../styled/Footer/FooterTemplate";
import { FooterAddressSection } from "../../molecules/Footer/FooterAddressSection";
import { FooterLinkSection } from "../../molecules/Footer/FooterLinkSection";
import { ImageWrapper } from "../../atoms/ImageWrapper";
import { FooterAddressInfo } from "../../molecules/Containers/FooterAddressInfo";

interface FooterProps {
  footerAcknowlegdmentImg: string;
  bgColor: string;
}

export const Footer = ({ footerAcknowlegdmentImg, bgColor }: FooterProps) => {
  return (
    <FooterTemplate $bgColor={bgColor}>
      <FooterLinkSection>
        <FooterLinkList heading="About" links={mockFooterAboutLinks} />
        <FooterLinkList heading="About" links={mockFooterAboutLinks} />
      </FooterLinkSection>

      <FooterAddressSection>
        <ImageWrapper imgSrc={footerAcknowlegdmentImg} width={200} />
        <FooterAddressInfo contactDetails={mockContactDetails} />
      </FooterAddressSection>
    </FooterTemplate>
  );
};
