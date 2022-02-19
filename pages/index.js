import {
  Box,
  Flex,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import { BiRightArrow } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import AboutCard from "../components/AboutCard";
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
          <Box w={"10%"} bg={"black"} height={"500px"} color={"white"}>
            <List spacing={3}>
              {sidebarItem.map((item) => (
                <ListItem key={() => Math.random()}>
                  <ListIcon as={IoIosArrowForward} color="white" />
                  {item.title}
                </ListItem>
              ))}
            </List>
          </Box>
          {/* Tab Component */}
          <Box w={"90%"} padding={"2rem"}>
            <List>
              <ListItem key={() => Math.random()}>
                <Grid
                  templateRows={"repeat(4, 1fr)"}
                  templateColumns={"repeat(6, 1fr)"}
                >
                  <GridItem rowSpan={1} colSpan={2}>
                    <ProjectCard />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={2}>
                    <ProjectCard />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={2}>
                    <ProjectCard />
                  </GridItem>
                </Grid>
              </ListItem>
            </List>
          </Box>
        </Flex>
        {/* Mosaic per Tab */}
      </Box>
    </Box>
  );
}

export default Home;
