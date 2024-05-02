/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SportBackground } from "../assets/sports";

const ListHeader = ({ children }) => {
  return (
    <Text
      fontWeight={"400"}
      fontSize={"lg"}
      fontFamily={"typewriter"}
      color={"#ffffff"}
    >
      {children}
    </Text>
  );
};
const Item = ({ item, mt }) => {
  return (
    <Box
      as="a"
      href={"#"}
      fontWeight={"400"}
      fontSize={12}
      fontFamily={"typewriter"}
      color={"#ffffff"}
      _hover={{
        textDecoration: "none",
        color: "gray.500",
      }}
      mt={mt}
    >
      {item}
    </Box>
  );
};
export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      style={{
        backgroundImage: `url(${SportBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1E1E1E",
      }}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader>LINES</ListHeader>
            <Item item={"Informations pratiques"} />
            <Item item={"Accessibilité"} />
            <Item item={"FAQ"} />
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Nous contacter</ListHeader>
            <Item item={"789 Boulevard des Artistes,"} />
            <Item item={"75018 Paris,France."} />
            <Item item={"01 87 56 74 37"} mt={4} />
            <Item item={"interolympique@gmail.com"} />
          </Stack>
          <Stack align={"flex-end"}>
            <ListHeader>RETROUVEZ NOUS</ListHeader>
            <Item item={"paris2024 (@paris2024officiel)"} />
            <Item item={"Paris2024 (@paris2024)"} />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
