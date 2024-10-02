import { useEffect, useState } from "react";
import img1 from "../../../assets/rotating1.jpg";
import img2 from "../../../assets/rotating2.jpg";
import img3 from "../../../assets/rotating3.jpg";

export const MultiBackgroundImageBlock = () => {
  const imgArray = [img1, img2, img3];
  const [currentImg, setCurrenImage] = useState(img1);

  useEffect(() => {
    let count = 0;
    setInterval(() => {
      count++;
      console.log(count);
      if (count === imgArray.length) {
        count = 0;
      }

      const newImg = imgArray[count];
      setCurrenImage(newImg);
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
