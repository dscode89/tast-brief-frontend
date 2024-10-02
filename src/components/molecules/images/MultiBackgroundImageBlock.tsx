import { useEffect, useState } from "react";

interface MultiBackgroundImageBlockProps {
  images: string[];
}

export const MultiBackgroundImageBlock = ({
  images,
}: MultiBackgroundImageBlockProps) => {
  const [currentImg, setCurrenImage] = useState(images[0]);

  useEffect(() => {
    let count = 0;

    const imgInterval = setInterval(() => {
      count++;

      if (count === images.length) {
        count = 0;
      }

      const newImg = images[count];
      setCurrenImage(newImg);

      return () => clearInterval(imgInterval);
    }, 5000);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${currentImg})`,
        backgroundSize: "cover",
        transition: "background-image 1.5s ease-in",
      }}
    ></div>
  );
};
