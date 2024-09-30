import { v4 as uuidv4 } from "uuid";
import { ProductColumn } from "./Containers/ProductColumn";
import { ContentCenteredRow } from "../styled/containers/ContentCenteredRow";
import { ProductBlockProps } from "./Containers/ProductColumn";

interface ProductInfoSectionProps {
  products: ProductBlockProps[];
}

export const ProductInfoSection = ({ products }: ProductInfoSectionProps) => {
  return (
    <ContentCenteredRow>
      {products.map((product) => {
        return (
          <ProductColumn
            key={uuidv4()}
            title={product.title}
            description={product.description}
            img={product.img}
          />
        );
      })}
    </ContentCenteredRow>
  );
};
