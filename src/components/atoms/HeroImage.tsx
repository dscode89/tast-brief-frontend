import { Hero } from "../styled/Images/Hero";

interface LandingHeroSectionProps {
  src: string;
}

export const HeroImage = ({ src }: LandingHeroSectionProps) => {
  return <Hero $src={src} />;
};
