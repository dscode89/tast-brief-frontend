import { AwardBanner } from "../../molecules/AwardBanner";
import fakeRating from "../../../assets/fakeRating.png";
import { PrimarySecondaryParagraph } from "../../molecules/Typography/PrimarySecondaryParagraph";
import { ProductInfoSection } from "../../molecules/ProductsInfoSection";
import { mockProducts } from "../../../mock-data/mockProducts";
import { bioSummary } from "../../../mock-data/mockBioSumary";

export const CompanyIntroductionSection = () => {
  return (
    <section>
      <AwardBanner imgSrcs={[fakeRating]} widthPx={175} />
      <PrimarySecondaryParagraph
        primaryParagraphContent={bioSummary.bio}
        secondaryParagraphContent={bioSummary.summary}
        primaryParagraphFontSize={1.4}
        primaryParagraphFontWeight={300}
        secondaryParagraphFontSize={1.3}
        secondaryParagraphFontWeight={200}
      />
      <ProductInfoSection products={mockProducts} />
    </section>
  );
};
