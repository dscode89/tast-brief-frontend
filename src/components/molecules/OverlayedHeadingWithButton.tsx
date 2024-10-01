import { HeadingSecondary } from "../atoms/Typography/HeadingSecondary";
import { PrimaryBtn } from "../atoms/Buttons/PrimaryBtn";
import { CenteredOverlayContainer } from "../styled/containers/CenteredOverlayContainer";

export interface TitleWithActionProps {
  title: string;
  btnText: string;
  headerFontSize: number;
  action: () => void;
  btnColor: string;
  btnBgColor: string;
  hoverBtnColor: string;
  height?: number;
  titleColor: string;
}

export const OverlayedHeadingAndButton = ({
  title,
  btnText,
  btnBgColor,
  btnColor,
  hoverBtnColor,
  headerFontSize,
  titleColor,
}: TitleWithActionProps) => {
  return (
    <CenteredOverlayContainer>
      <HeadingSecondary fontSizeRem={headerFontSize} color={titleColor}>
        {title}
      </HeadingSecondary>

      <PrimaryBtn
        color={btnColor}
        bgcolor={btnBgColor}
        hoverBgColor={hoverBtnColor}
        onClick={() => {}}
      >
        {btnText}
      </PrimaryBtn>
    </CenteredOverlayContainer>
  );
};
