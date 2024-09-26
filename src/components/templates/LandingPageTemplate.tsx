import { HeroImage } from "../atoms/HeroImage";
import trainHeroImg from "../../assets/trainHeroImg.jpg";
import { CompanyIntroductionSection } from "../organisms/CompanyIntroductionSection";
import { HeroWithActions } from "../molecules/HeroWithActions";

export const LandingPageTemplate = () => {
  return (
    <>
      <HeroImage src={trainHeroImg} height={500} />
      <CompanyIntroductionSection />
      <HeroWithActions
        title="Here is a title for a section with a link."
        btnText="More Info"
        action={() => {}}
        headerFontSize={3.2}
        btnBgColor="#ffd1dc"
        titleColor="#FFFFFF"
        btnColor="#000000"
        height={600}
      />
    </>
  );
};
