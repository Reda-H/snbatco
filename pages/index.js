import {
  Box,
  Flex,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/layout";
import { BiRightArrow } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import AboutCard from "../components/AboutCard";
import AccordionComponent from "../components/AccordionComponent";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const sidebarItem = [
  {
    title: "item1",
  },
  {
    title: "item2",
  },
  {
    title: "item3",
  },
];

function Home() {
  return (
    <Box>
      <Box>
        {/* Presentation Area */}
        {/* <AboutCard /> */}
        {/* <Hero /> */}
        <Carousel />
      </Box>
      <Box>
        <Flex direction={"row"}>
          {/* Mosaic Area */}
          {/* Menu Side */}
          {/* <Box w={"10%"} bg={"black"} height={"500px"} color={"white"}>
            <List spacing={3}>
              {sidebarItem.map((item) => (
                <ListItem key={() => Math.random()}>
                  <ListIcon as={IoIosArrowForward} color="white" />
                  {item.title}
                </ListItem>
              ))}
            </List>
          </Box> */}
          {/* Tab Component */}
          <AccordionComponent>
            <Box w={"100%"} p={4}>
              <List>
                <ListItem key={() => Math.random()}>
                  <SimpleGrid
                    rows={{ sm: 3, md: 2 }}
                    columns={{ sm: 1, md: 3 }}
                  >
                    <Box>
                      <ProjectCard
                        imageLink={
                          "https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80"
                        }
                      />
                    </Box>
                    <Box>
                      <ProjectCard
                        imageLink={
                          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80"
                        }
                      />
                    </Box>
                    <Box>
                      <ProjectCard
                        imageLink={
                          "https://images.unsplash.com/photo-1600645896997-3c00e14c0b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                        }
                      />
                    </Box>
                  </SimpleGrid>
                </ListItem>
              </List>
            </Box>
          </AccordionComponent>
        </Flex>
        {/* Mosaic per Tab */}
      </Box>
    </Box>
  );
}

export default Home;
