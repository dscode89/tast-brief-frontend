import { Hero } from "../styled/Hero";

interface LandingHeroSectionProps {
  src: string;
}

export const HeroImage = ({ src }: LandingHeroSectionProps) => {
  return <Hero $src={src} />;
};
