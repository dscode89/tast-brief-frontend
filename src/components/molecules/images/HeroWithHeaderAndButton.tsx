import { HeroImage } from "../../atoms/Images/HeroImage";
import { OverlayedHeadingAndButton } from "../OverlayedHeadingWithButton";
import trainImage2 from "../../../assets/trainHeroImg2.jpg";
import { TitleWithActionProps } from "../OverlayedHeadingWithButton";

export const HeroWithHeaderAndButton = ({
  title,
  btnText,
  action,
  headerFontSize,
  btnBgColor,
  btnColor,
  height,
  titleColor,
}: TitleWithActionProps) => {
  return (
    <HeroImage src={trainImage2} height={height!}>
      <OverlayedHeadingAndButton
        title={title}
        titleColor={titleColor}
        btnText={btnText}
        action={action}
        headerFontSize={headerFontSize}
        btnBgColor={btnBgColor}
        btnColor={btnColor}
      />
    </HeroImage>
  );
};
