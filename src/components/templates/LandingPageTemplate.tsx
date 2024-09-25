import { HeroImage } from "../atoms/HeroImage";
import trainHeroImg from "../../assets/trainHeroImg.jpg";
import { CompanyIntroductionSection } from "../organisms/HeaderWithNavigation.tsx/CompanyIntroductionSection";

export const LandingPageTemplate = () => {
  return (
    <>
      <HeroImage src={trainHeroImg} />
      <CompanyIntroductionSection />
    </>
  );
};
