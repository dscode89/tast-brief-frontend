import { ImageContainer } from "../../styled/Images/ImgContainer";

interface ImageWrapperProps {
  imgSrc: string;
  width: number;
}

export const ImageWrapper = ({ imgSrc, width }: ImageWrapperProps) => {
  return <ImageContainer src={imgSrc} $width={width} />;
};
