import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/layout";

const AccordionComponent = ({ children, id, title }) => {
  return (
    <AccordionItem w={"100%"} id={id}>
      <h2>
        <AccordionButton borderBottom={"1px solid gray"}>
          <Box flex="1" textAlign="left">
            <Heading size={"md"}>{title}</Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel w={"100%"}>{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionComponent;
