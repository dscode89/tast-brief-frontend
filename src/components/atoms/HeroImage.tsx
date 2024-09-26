import { Hero } from "../styled/Images/Hero";

interface LandingHeroSectionProps {
  src: string;
  height: number;
  children?: React.ReactNode;
}

export const HeroImage = ({
  src,
  height,
  children,
}: LandingHeroSectionProps) => {
  return (
    <Hero $src={src} $height={height}>
      {children}
    </Hero>
  );
};
