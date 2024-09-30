import { ContentCenteredRow } from "../styled/containers/ContentCenteredRow";
import { ImageWrapper } from "../atoms/Images/ImageWrapper";
import { v4 as uuidv4 } from "uuid";

interface AwardBannerProps {
  imgSrcs: string[];
  widthPx: number;
}

export const AwardBanner = ({ imgSrcs, widthPx }: AwardBannerProps) => {
  return (
    <ContentCenteredRow>
      {imgSrcs.map((img) => {
        return <ImageWrapper width={widthPx} imgSrc={img} key={uuidv4()} />;
      })}
    </ContentCenteredRow>
  );
};
