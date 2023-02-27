import { useState } from "react";
import { Image } from "@mantine/core";
import { ChevronLeftIcon, ChevronRightIcon } from "@mantine/icons";

const images = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
  "https://picsum.photos/400/300?random=4",
];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src={images[currentImage]}
          fit="cover"
          style={{ width: "100%", height: "400px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translateY(-50%)",
            zIndex: 1,
            cursor: "pointer",
          }}
          onClick={previousImage}
        >
          <ChevronLeftIcon size={32} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
            zIndex: 1,
            cursor: "pointer",
          }}
          onClick={nextImage}
        >
          <ChevronRightIcon size={32} />
        </div>
      </div>
    </>
  );
}
