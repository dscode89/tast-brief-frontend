import { Paragraph } from "../../styled/Typography/Paragraph";
import { ContentCenteredColumn } from "../../styled/containers/ContentCenteredColumn";

interface PrimarySecondaryParagraphProps {
  primaryParagraphContent: string;
  secondaryParagraphContent: string;
  primaryParagraphFontSize: number;
  primaryParagraphFontWeight: number | string;
  secondaryParagraphFontSize: number;
  secondaryParagraphFontWeight: number | string;
}

export const PrimarySecondaryParagraph = ({
  primaryParagraphContent,
  secondaryParagraphContent,
  primaryParagraphFontSize,
  primaryParagraphFontWeight,
  secondaryParagraphFontSize,
  secondaryParagraphFontWeight,
}: PrimarySecondaryParagraphProps) => {
  return (
    <ContentCenteredColumn>
      <Paragraph
        $fontSize={primaryParagraphFontSize}
        $fontWeight={primaryParagraphFontWeight}
      >
        {primaryParagraphContent}
      </Paragraph>
      <Paragraph
        $fontSize={secondaryParagraphFontSize}
        $fontWeight={secondaryParagraphFontWeight}
        $color="#808080"
      >
        {secondaryParagraphContent}
      </Paragraph>
      <div
        style={{
          height: "2px",
          backgroundColor: "#ffd1dc",
          width: "60%",
          margin: "10px 0",
        }}
      ></div>
    </ContentCenteredColumn>
  );
};
