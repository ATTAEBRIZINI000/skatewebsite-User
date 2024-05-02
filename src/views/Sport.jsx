import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { SportBackground } from "../assets/sports";
import { Carousel } from "../components";

export const Sport = () => {
  const [imageHeight, setImageHeight] = useState("100vh");

  useEffect(() => {
    const img = new Image();
    img.src = SportBackground;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const boxHeight = windowHeight;
      const boxWidth = boxHeight * aspectRatio;
      if (boxWidth > windowWidth) {
        setImageHeight(windowWidth / aspectRatio);
      } else {
        setImageHeight(windowHeight);
      }
    };
  }, []);

  return (
    <Box
      style={{
        backgroundImage: `url(${SportBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1E1E1E",
      }}
      w="100%"
      h={imageHeight}
    >
    <Carousel/>
    </Box>
  );
};
