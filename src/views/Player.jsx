import { Box } from "@chakra-ui/react";
import { PlayerImage } from "../assets";
export const Player = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${PlayerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      w="100%"
      h={`1440px`}
    >
    </Box>
  );
};
