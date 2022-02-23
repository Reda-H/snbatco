import { Box, Center, SimpleGrid } from "@chakra-ui/layout";
import {
  Accordion,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import AccordionComponent from "../components/AccordionComponent";
import Carousel from "../components/Carousel";
import ModalComponent from "../components/ModalComponent";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";

const data = [
  {
    type: "new",
    title: "Projets Récents",
    projects: [
      {
        image:
          "https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80",
        title: "Projet Batiment 1",
        paragraph:
          "Officia tempor velit sunt sunt exercitation id quis enim proident incididunt culpa non sit cupidatat.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80",
        title: "Projet Batiment 2",
        paragraph: "Duis qui voluptate occaecat fugiat aliqua.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600645896997-3c00e14c0b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        title: "Projet Batiment 3",
        paragraph: "Ut commodo anim aliqua enim deserunt eu consectetur duis.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80",
        title: "Projet Batiment 4",
        paragraph: "Do magna nostrud pariatur ipsum.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600645896997-3c00e14c0b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        title: "Projet Batiment 5",
        paragraph: "Duis voluptate adipisicing tempor proident.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80",
        title: "Projet Batiment 6",
        paragraph:
          "Dolore proident occaecat ad fugiat aute ut exercitation ut.",
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
        title: "Projet Batiment 7",
        paragraph: "Voluptate dolor velit ullamco ad.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80",
        title: "Projet Batiment 8",
        paragraph:
          "Deserunt pariatur deserunt elit sint ex pariatur laborum cillum sint minim.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600645896997-3c00e14c0b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        title: "Projet Batiment 9",
        paragraph:
          "Enim dolore mollit nisi velit laborum in mollit velit consequat ex exercitation.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1607189790510-178169be6c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=586&q=80",
        title: "Projet Batiment 10",
        paragraph:
          "Nostrud irure deserunt amet aliqua ad occaecat elit amet aliqua amet Lorem.",
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

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [selected, setSelected] = useState({});
  return (
    <Box>
      <Box>
        {/* Presentation Area */}
        <Carousel />
      </Box>
      <Box>
        {/* Mosaic Area */}
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
                      <Box
                        key={project.image}
                        onClick={() => {
                          onOpen();
                          setSelected(project);
                        }}
                        cursor={"pointer"}
                      >
                        <ProjectCard
                          imageLink={project.image}
                          type={item.type}
                          title={project.title}
                          paragraph={project.paragraph}
                        />
                      </Box>
                    ))}
                    {skeletonProjects[index].map((project) => {
                      if (project.length !== 0) {
                        return (
                          <Skeleton m={1} key={() => Math.random()}>
                            <ProjectCard imageLink={null} type={"old"} />
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
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        overlay={
          <ModalOverlay bg="blackAlpha.300" backdropFilter={"blur(10px)"} />
        }
        title={selected.title}
      >
        <Box>
          <ProjectDetails project={selected} />
        </Box>
      </ModalComponent>
    </Box>
  );
};

export default Home;
