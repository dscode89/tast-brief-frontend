import { ContentSpacedColumn } from "../../styled/containers/ContentSpacedColumn";
import { ImageWrapper } from "../../atoms/Images/ImageWrapper";
import { Paragraph } from "../../styled/Typography/Paragraph";

export interface ProductBlockProps {
  title: string;
  description: string;
  img: string;
}

export const ProductColumn = ({
  title,
  description,
  img,
}: ProductBlockProps) => {
  {
    return (
      <ContentSpacedColumn>
        <ImageWrapper width={100} imgSrc={img} />
        <h3 style={{ margin: "10px 0" }}>{title}</h3>
        <Paragraph $fontSize={0.8} $fontWeight={300}>
          {description}
        </Paragraph>
      </ContentSpacedColumn>
    );
  }
};
