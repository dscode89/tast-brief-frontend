import { HeroImage } from "../atoms/HeroImage";
import { HeadingWithAction } from "./HeadingWithAction";
import trainImage2 from "../../assets/trainHeroImg2.jpg";
import { TitleWithActionProps } from "./HeadingWithAction";

export const HeroWithActions = ({
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
      <HeadingWithAction
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
