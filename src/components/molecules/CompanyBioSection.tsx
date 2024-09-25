import { Paragraph } from "../styled/Typography/Paragraph";

interface CompanyBioSummaryProps {
  bio: string;
  summary: string;
  bioFontSizeRems: number;
  bioFontWeight: number | string;
  summaryFontSizeRems: number;
  summaryFontWeight: number | string;
}

export const CompanyBioSection = ({
  bio,
  summary,
  bioFontSizeRems,
  bioFontWeight,
  summaryFontSizeRems,
  summaryFontWeight,
}: CompanyBioSummaryProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph $fontSize={bioFontSizeRems} $fontWeight={bioFontWeight}>
        {bio}
      </Paragraph>
      <Paragraph
        $fontSize={summaryFontSizeRems}
        $fontWeight={summaryFontWeight}
        $color="#808080"
      >
        {summary}
      </Paragraph>
      <div
        style={{
          height: "2px",
          backgroundColor: "#ffd1dc",
          width: "60%",
          margin: "10px 0",
        }}
      ></div>
    </div>
  );
};
