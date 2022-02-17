import { Box, Center } from "@chakra-ui/layout";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundImage from "/public/background-building.png";
import NextImage from "next/image";

const AboutCard = () => {
  return (
    <Box
      w={"100%"}
      mx={"auto"}
      h={"400px"}
      backgroundImage={`url(/background-building.png)`}
      backgroundAttachment={"fixed"}
    >
      <Center h={"100%"}>
        <Box p={"50px"} color={"white"} fontSize={"18px"} lineHeight={"2rem"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </Center>
    </Box>
  );
};

export default AboutCard;
