import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Text,
  Fade,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

function ProjectCard({ imageLink }) {
  let [toggle, setToggle] = useState(false);
  return (
    <Flex
      marginX={0}
      marginY={{ base: 3, md: 0 }}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        <Text
          position="absolute"
          top={2}
          right={2}
          color="red.200"
          fontWeight={"bold"}
        >
          {"Récent".toUpperCase()}
        </Text>
        <Fade in={toggle}>
          <Box
            background={"rgba(0,0,0,0.5)"}
            zIndex={2}
            position={"absolute"}
            top={0}
            right={0}
            height={"100%"}
            width={"100%"}
            display={"block"}
            p={5}
            maxW={"100%"}
          >
            <Flex
              h={"100%"}
              direction={"column"}
              justifyContent={"flex-end"}
              alignItems={"flex-start"}
            >
              <Heading color={"white"} mb={2}>
                Project Batiment
              </Heading>
              <Text
                color="gray.500"
                w={"100%"}
                maxW={"100%"}
                noOfLines={2}
                mb={12}
              >
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Text>
            </Flex>
          </Box>
        </Fade>
        <Image
          src={imageLink}
          alt={`Picture of building`}
          rounded="lg"
          zIndex={1}
        />
      </Box>
    </Flex>
  );
}

export default ProjectCard;
