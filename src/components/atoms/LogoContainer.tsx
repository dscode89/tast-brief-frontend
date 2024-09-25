import { ImageContainer } from "../styled/ImgContainer";

interface LogoContainerProps {
  imgSrc: string;
  width: number;
}

export const LogoContainer = ({ imgSrc, width }: LogoContainerProps) => {
  return <ImageContainer src={imgSrc} $width={width} />;
};
