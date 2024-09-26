import { HeadingTertiary } from "../../atoms/Typography/HeadingTertiary";
import { LeftAlignedWrapper } from "../../styled/containers/LeftAlignedWrapper";

interface FooterAddressInfoProps {
  contactDetails: {
    lineOne: string;
    lineTwo?: string;
    city: string;
    postcode: string;
    email: string;
    phone: string;
  };
}

export const FooterAddressInfo = ({
  contactDetails,
}: FooterAddressInfoProps) => {
  return (
    <LeftAlignedWrapper $flexDirection="column">
      <HeadingTertiary fontSizeRem={1.1} color="#000000">
        Contact
      </HeadingTertiary>
      <p>{contactDetails.lineOne}</p>
      {contactDetails.lineTwo ? <p>{contactDetails.lineTwo}</p> : null}
      <p>{contactDetails.city}</p>
      <p>{contactDetails.phone}</p>
      <p>{contactDetails.email}</p>
    </LeftAlignedWrapper>
  );
};
