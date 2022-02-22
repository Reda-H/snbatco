import { MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
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
} from "@chakra-ui/react";
import { BiCalendar } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";

let photoData = [
  {
    url: "https://www.realconstructions.lu/wp-content/uploads/sites/81/2014/08/realconstructions-construction02.jpg",
  },
  {
    url: "https://www.constructionbusinessowner.com/sites/default/files/styles/thumb/public/2022-02/Guigli-Case-Study-Tenna_article-header-980x400.jpg?itok=rRw1bz-m",
  },
  {
    url: "https://www.stihl.co.uk/p/images/header_490x170/uk-en/J5013-490wx358h-construction-banner_rdax_65.jpg",
  },
  {
    url: "https://thumbs.dreamstime.com/b/construction-site-showing-machinery-backhoe-foundation-masons-construction-work-construction-equipment-construction-products-real-115604524.jpg",
  },
  {
    url: "https://thumbs.dreamstime.com/b/construction-site-showing-machinery-backhoe-foundation-masons-construction-work-construction-equipment-construction-products-real-115604487.jpg",
  },
  {
    url: "https://img.freepik.com/photos-gratuite/directeur-construction-ingenieur-papier-plans-casque-protection-portee-main-chantier_293060-8690.jpg?size=626&ext=jpg",
  },
  {
    url: "https://www.realmadrid.com/img/horizontal_940px/_1vc2021_h_20200810084054.jpg",
  },
  {
    url: "https://yellowprod.s3-eu-west-1.amazonaws.com/uploads/gallery_picture/picture/27589/Realconstruction_1.JPG",
  },
  {
    url: "https://www.realconstructions.lu/wp-content/uploads/sites/81/2014/08/realconstructions-construction02.jpg",
  },
  {
    url: "https://enfinrentable.fr/wp-content/uploads/building-home-crash-disaster-demolition-earthquake-1152509-pxhere.com_.jpg",
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
              h={"100%"}
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

      <SimpleGrid columns={4}>
        {photoData.map((photo) => (
          <Box>
            <Image src={photo.url} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProjectDetails;
