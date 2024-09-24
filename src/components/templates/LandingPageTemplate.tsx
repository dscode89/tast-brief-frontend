import { LandingHeroSection } from "../atoms/Hero";
import trainHeroImg from "../../assets/trainHeroImg.jpg";

export const LandingPageTemplate = () => {
  return (
    <>
      <LandingHeroSection src={trainHeroImg} />
    </>
  );
};
