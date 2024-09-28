import { HeadingSecondary } from "../atoms/Typography/HeadingSecondary";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { HeroTitleAndAction } from "../styled/HeroTitleAndAction";

export interface TitleWithActionProps {
  title: string;
  btnText: string;
  headerFontSize: number;
  action: () => void;
  btnColor: string;
  btnBgColor: string;
  height?: number;
  titleColor: string;
}

export const HeadingWithAction = ({
  title,
  btnText,
  btnBgColor,
  btnColor,
  headerFontSize,
  titleColor,
}: TitleWithActionProps) => {
  return (
    <HeroTitleAndAction>
      <HeadingSecondary fontSizeRem={headerFontSize} color={titleColor}>
        {title}
      </HeadingSecondary>

      <PrimaryBtn color={btnColor} bgcolor={btnBgColor}>
        {btnText}
      </PrimaryBtn>
    </HeroTitleAndAction>
  );
};
