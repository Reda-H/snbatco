import { MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Grid,
  GridItem,
  Center,
  HStack,
  Divider,
  Icon,
  Image,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { MdArchitecture, MdPerson, MdVerified } from "react-icons/md";
import ModalComponent from "./ModalComponent";

let photoData = [
  {
    url: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/1188532/pexels-photo-1188532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/190417/pexels-photo-190417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/69483/pexels-photo-69483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/2323080/pexels-photo-2323080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/7931/pexels-photo-7931.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    url: "https://images.pexels.com/photos/2209529/pexels-photo-2209529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const ProjectDetails = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [selected, setSelected] = useState("");

  const handlePictureModal = (url) => {
    onOpen();
    setSelected(url);
  };

  return (
    <Container maxW={"6xl"}>
      <Grid templateRows={"repeat(1, 1fr)"} templateColumns={"repeat(5, 1fr)"}>
        <GridItem colSpan={[5, 2]}>
          <Flex height={"100%"}>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={project.image}
              fit={"cover"}
              align={"center"}
              height={"100%"}
              width={"100%"}
            />
          </Flex>
        </GridItem>
        <GridItem colSpan={[5, 3]}>
          <Stack spacing={1}
            height={"100%"}
            justifyContent={"center"}>
            <Box as={"header"} px={[0, 6]}>
              <Heading fontSize={"2xl"}>{project.title}</Heading>
              <Stack
                direction={["column", "row"]}
                borderBottom={"1px solid gray"}
              >
                <HStack>
                  <MdPerson />
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <Text>M. d'ouvrage:</Text>
                  <Text fontWeight={"bold"}>Amine Skalli</Text>
                  </HStack>

                <HStack>
                  <MdArchitecture />
                  <Text>Architecte:</Text>
                  <Text fontWeight={"bold"}>Nezha Bouzoubaa</Text>
                </HStack>
              </Stack>
              <Stack
                direction={["column", "row"]}
                borderBottom={"1px solid gray"}
              >
                <HStack>
                  <MdVerified />
                  <Text>Bureau de Controle:</Text>
                  <Text fontWeight={"bold"}>NORISKO</Text>
                </HStack>
              </Stack>
            </Box>
            <Box px={[0, 6]} py={[0, 5]}>
              <Text>
                Mollit labore officia nisi aute nostrud non voluptate cillum est
                culpa reprehenderit tempor et aliquip. Officia elit occaecat ex
                commodo ut. Amet velit aliqua eiusmod ea incididunt duis non
                aliqua et sunt ullamco cillum qui. Aute irure et duis ea id. Est
                aliqua officia do excepteur ut reprehenderit anim laborum
                dolore.
              </Text>
              <Grid
                my={5}
                templateRows={["repeat(2, 1fr)", "repeat(1, 1fr)"]}
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              >
                <GridItem
                  colSpan={[1, 1]}
                  borderRight={["none", "1px solid black"]}
                >
                  <Center
                    justifyContent={["center"]}
                    borderBottom={["1px solid black", "none"]}
                    paddingY={["2", "0"]}
                    height={"100%"}
                  >
                    <Box>
                      <Flex direction={"row"} lineHeight={1}>
                        <FiDollarSign />
                        <Text fontSize={"2xl"}>250.682.000,00</Text>
                      </Flex>
                    </Box>
                  </Center>
                </GridItem>
                {/* <GridItem
                  colSpan={[3, 1]}
                  borderRight={["none", "1px solid black"]}
                >
                  <Center
                    justifyContent={["center"]}
                    borderBottom={["1px solid black", "none"]}
                    paddingY={["2", "0"]}
                    height={"100%"}
                  >
                    <Box>
                      <HStack>
                        <Flex direction={"row"} lineHeight={1}>
                          <BsCheck2Circle color="green" />
                          <Text fontSize={"2xl"}>AS</Text>
                        </Flex>

                        <Flex direction={"row"} lineHeight={1}>
                          <BsCheck2Circle color="green" />
                          <Text fontSize={"2xl"}>AAC</Text>
                        </Flex>
                      </HStack>
                    </Box>
                  </Center>
                </GridItem> */}
                <GridItem colSpan={[1, 1]}>
                  <Center
                    justifyContent={["center"]}
                    paddingY={["2", "0"]}
                    height={"100%"}
                  >
                    <Box>
                      <Flex direction={"row"} lineHeight={1}>
                        <Text fontSize={"2xl"} textAlign={"center"}>
                          Sept 2006
                        </Text>
                        <Center>
                          <MinusIcon />
                        </Center>
                        <Text fontSize={"2xl"} textAlign={"center"}>
                          Oct 2009
                        </Text>
                      </Flex>
                    </Box>
                  </Center>
                </GridItem>
              </Grid>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
      <Box marginTop={["0", "4"]}>
        <SimpleGrid columns={[1, 4]}>
          {photoData.map((photo) => (
            <Box
              key={photo.url}
              w={"100%"}
              h={"210px"}
              p={"10px"}
              onClick={() => handlePictureModal(photo.url)}
              cursor={"pointer"}
            >
              <Image
                src={`${photo.url}`}
                width={"100%"}
                height={"100%"}
                fit={"cover"}
                alt={"picture from gallery of project"}
                transition={"transform .4s"}
                _hover={{ transform: "scale(1.2)", transformOrigin: "50% 50%" }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        overlay={
          <ModalOverlay bg="blackAlpha.300" backdropFilter={"grayscale(1)"} />
        }
        background={"black"}
      >
        <Center>
          <Image
            src={selected}
            height={["100%", "75vh"]}
            marginY={["auto", "0"]}
          />
        </Center>
      </ModalComponent>
    </Container>
  );
};

export default ProjectDetails;
