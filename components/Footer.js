import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/layout";
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import {SiGmail} from "react-icons/si";

function Footer() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          position={"fixed"}
          bottom={"40px"}
          right={"5vw"}
          borderRadius={"80px"}
          icon={<AiFillPhone size={"24"}/>}
          isRound
          // size={"lg"}
          height={"64px"}
          width={"64px"}
        />
      </PopoverTrigger>
      <PopoverContent w={"16vw"} minW={"220px"} marginRight={"20px"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Box p={5}>
          <Center>
            <Text fontSize={"18px"} my={"2"}>
              <Flex direction={"row"} alignItems="center" justifyContent={"space-between"}>
                <BsWhatsapp />
                <Link href="whatsapp://+212697444476" lineHeight={"1rem"}>
                  +212 6 97 44 44 76
                </Link>
              </Flex>
            </Text>
          </Center>
          <Center>
            <Text fontSize={"18px"} my={"2"}>
              <Flex direction={"row"} alignItems="center">

              <SiGmail/>
              <Link href="mailto:herradi.r@gmail.com" isExternal>
                Herradi.R@gmail.com
              </Link>
              </Flex>
            </Text>
          </Center>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Footer;
