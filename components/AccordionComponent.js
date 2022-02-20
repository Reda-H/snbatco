import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/layout";

const AccordionComponent = ({ children }) => {
  return (
    <Accordion defaultIndex={[0, 1]} allowMultiple w={"100%"}>
      <AccordionItem w={"100%"} id={0}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading size={"lg"}>Projets Récents</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel w={"100%"}>{children}</AccordionPanel>
      </AccordionItem>

      <AccordionItem id={1}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
