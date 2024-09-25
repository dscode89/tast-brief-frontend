import { ImageBanner } from "../styled/ImageBanner";
import { LogoContainer } from "../atoms/LogoContainer";
import { v4 as uuidv4 } from "uuid";

interface AwardBannerProps {
  imgSrcs: string[];
  widthPx: number;
}

export const AwardBanner = ({ imgSrcs, widthPx }: AwardBannerProps) => {
  return (
    <ImageBanner>
      {imgSrcs.map((img) => {
        return <LogoContainer width={widthPx} imgSrc={img} key={uuidv4()} />;
      })}
    </ImageBanner>
  );
};
