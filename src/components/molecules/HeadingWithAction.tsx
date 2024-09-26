import { HeadingSecondary } from "../atoms/Typography/HeadingSecondary";
import { PrimaryBtn } from "../atoms/PrimaryBtn";

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
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      <HeadingSecondary fontSizeRem={headerFontSize} color={titleColor}>
        {title}
      </HeadingSecondary>

      <PrimaryBtn color={btnColor} bgcolor={btnBgColor}>
        {btnText}
      </PrimaryBtn>
    </div>
  );
};
