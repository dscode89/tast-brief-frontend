import { ProductColumn } from "../styled/ProductColumn";
import { ImageWrapper } from "../atoms/ImageWrapper";
import { Paragraph } from "../styled/Typography/Paragraph";

export interface ProductBlockProps {
  title: string;
  description: string;
  img: string;
}

export const ProductBlock = ({
  title,
  description,
  img,
}: ProductBlockProps) => {
  {
    return (
      <ProductColumn>
        <ImageWrapper width={100} imgSrc={img} />
        <h3 style={{ margin: "10px 0" }}>{title}</h3>
        <Paragraph $fontSize={0.8} $fontWeight={300}>
          {description}
        </Paragraph>
      </ProductColumn>
    );
  }
};
