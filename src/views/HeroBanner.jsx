import { Box } from "@chakra-ui/react";
import { Hero } from "../assets";
export const HeroBanner = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      w="100%"
      h={`100vh`}
    >
    </Box>
  );
};
