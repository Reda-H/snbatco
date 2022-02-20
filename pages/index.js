import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/layout";
import { Accordion, Skeleton } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import AboutCard from "../components/AboutCard";
import AccordionComponent from "../components/AccordionComponent";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const data = [
  {
    type: "new",
    title: "Projets Récents",
    projects: [
      {
        image:
          "https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600645896997-3c00e14c0b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600645896997-3c00e14c0b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80",
      },
    ],
  },
  {
    type: "old",
    title: "Projets Anciens",
    projects: [
      {
        image:
          "https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600645896997-3c00e14c0b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80",
      },
    ],
  },
];

let skeletonProjects = [];

for (let i = 0; i < data.length; i++) {
  if (data[i].projects.length % 3 != 0) {
    skeletonProjects.push(new Array(3 - (data[i].projects.length % 3)).fill(1));
  } else {
    skeletonProjects.push([]);
  }
}

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
        {/* Mosaic Area */}
        {/* Tab Component */}
        <Center>
          <Accordion defaultIndex={[0, 1]} allowMultiple w={"80%"}>
            {data.map((item, index) => (
              <AccordionComponent id={0} title={item.title} key={index}>
                <Box w={"100%"} p={4}>
                  <SimpleGrid
                    rows={{ sm: 3, md: 2 }}
                    columns={{ sm: 1, md: 3 }}
                  >
                    {item.projects.map((project) => (
                      <Box key={project.image}>
                        <ProjectCard
                          imageLink={project.image}
                          type={item.type}
                        />
                      </Box>
                    ))}
                    {skeletonProjects[index].map((project) => {
                      if (project.length !== 0) {
                        return (
                          <Skeleton m={1} key={() => Math.random()}>
                            <Box key={() => Math.random()}>
                              <ProjectCard imageLink={null} type={"old"} />
                            </Box>
                          </Skeleton>
                        );
                      }
                    })}
                  </SimpleGrid>
                </Box>
              </AccordionComponent>
            ))}
          </Accordion>
        </Center>
        {/* Mosaic per Tab */}
      </Box>
    </Box>
  );
}

export default Home;
