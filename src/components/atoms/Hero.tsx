import { Hero } from "../styled/Hero";

interface LandingHeroSectionProps {
  src: string;
}

export const LandingHeroSection = ({ src }: LandingHeroSectionProps) => {
  return <Hero $src={src} />;
};
