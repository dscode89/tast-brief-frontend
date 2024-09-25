import { ContentBanner } from "../styled/ContentBanner";
import { ImageWrapper } from "../atoms/ImageWrapper";
import { v4 as uuidv4 } from "uuid";

interface AwardBannerProps {
  imgSrcs: string[];
  widthPx: number;
}

export const AwardBanner = ({ imgSrcs, widthPx }: AwardBannerProps) => {
  return (
    <ContentBanner>
      {imgSrcs.map((img) => {
        return <ImageWrapper width={widthPx} imgSrc={img} key={uuidv4()} />;
      })}
    </ContentBanner>
  );
};
