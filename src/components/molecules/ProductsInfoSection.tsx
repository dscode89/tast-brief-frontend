import { v4 as uuidv4 } from "uuid";
import { ProductBlock } from "./ProductColumn";
import { ContentBanner } from "../styled/ContentBanner";
import { ProductBlockProps } from "./ProductColumn";

interface ProductInfoSectionProps {
  products: ProductBlockProps[];
}

export const ProductInfoSection = ({ products }: ProductInfoSectionProps) => {
  return (
    <ContentBanner>
      {products.map((product) => {
        return (
          <ProductBlock
            key={uuidv4()}
            title={product.title}
            description={product.description}
            img={product.img}
          />
        );
      })}
    </ContentBanner>
  );
};
