import { Box } from "@chakra-ui/react";
import { CultureImage } from "../assets";
export const Culture = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${CultureImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      w="100%"
      h={`850px`}
    >
    </Box>
  );
};
