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
} from "@chakra-ui/react";
import NextImage from "next/image";
import { BiCalendar } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";

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
  return (
    <Container maxW={"6xl"}>
      <Grid templateRows={"repeat(1, 1fr)"} templateColumns={"repeat(5, 1fr)"}>
        <GridItem colSpan={[5, 2]}>
          <Flex height={"100%"}>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={
                "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
              }
              fit={"cover"}
              align={"center"}
              height={"100%"}
              width={"100%"}
            />
          </Flex>
        </GridItem>
        <GridItem colSpan={[5, 3]}>
          <Stack spacing={1}>
            <Box as={"header"} px={[0, 6]}>
              <Heading fontSize={"2xl"}>{project.title}</Heading>
              <Stack
                direction={["column", "row"]}
                borderBottom={"1px solid gray"}
              >
                <Text>Ea Lorem non amet eiusmod commodo anim.</Text>
                <Text>Ea Lorem non</Text>
                <Text>2006</Text>
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
                templateRows={["repeat(3, 1fr)", "repeat(1, 1fr)"]}
                templateColumns={"repeat(3, 1fr)"}
              >
                <GridItem
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
                      <Flex direction={"row"} lineHeight={1}>
                        <FiDollarSign />
                        <Text fontSize={"2xl"}>250682000</Text>
                      </Flex>
                    </Box>
                  </Center>
                </GridItem>
                <GridItem
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
                          <Text fontSize={"2xl"}>LEED</Text>
                        </Flex>

                        <Flex direction={"row"} lineHeight={1}>
                          <BsCheck2Circle color="green" />
                          <Text fontSize={"2xl"}>AAC</Text>
                        </Flex>
                      </HStack>
                    </Box>
                  </Center>
                </GridItem>
                <GridItem colSpan={[3, 1]}>
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
      <Box>
        <SimpleGrid columns={4}>
          {photoData.map((photo) => (
            <Box key={photo.url} w={"100%"} p={"10px"}>
              <NextImage
                src={`${photo.url}`}
                width={"100%"}
                height={"100%"}
                layout={"responsive"}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ProjectDetails;