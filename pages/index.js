import { Box, List, ListIcon, ListItem } from "@chakra-ui/layout";
import { BiRightArrow } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import AboutCard from "../components/AboutCard";

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
        <AboutCard />
      </Box>
      <Box>
        {/* Mosaic Area */}
        {/* Menu Side */}
        <Box w={"10%"} bg={"black"} height={"500px"} color={"white"}>
          <List spacing={3}>
            {sidebarItem.map((item) => (
              <ListItem>
                <ListIcon as={IoIosArrowForward} color="white" />
                {item.title}
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Tab Component */}
        {/* Mosaic per Tab */}
      </Box>
    </Box>
  );
}

export default Home;
