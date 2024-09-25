import { AwardBanner } from "../../molecules/AwardBanner";
import fakeRating from "../../../assets/fakeRating.png";
import { CompanyBioSection } from "../../molecules/CompanyBioSection";
import { bioSummary } from "../../../mock-data/mockBioSumary";

export const CompanyIntroductionSection = () => {
  return (
    <section>
      <AwardBanner imgSrcs={[fakeRating]} widthPx={175} />
      <CompanyBioSection
        bio={bioSummary.bio}
        summary={bioSummary.summary}
        bioFontSizeRems={1.4}
        bioFontWeight={300}
        summaryFontSizeRems={1.3}
        summaryFontWeight={200}
      />
    </section>
  );
};
