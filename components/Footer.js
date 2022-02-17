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
import { Center, Flex, Link, Text } from "@chakra-ui/layout";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          position={"fixed"}
          bottom={"40px"}
          right={"5vw"}
          borderRadius={"80px"}
          icon={<AiFillPhone />}
          isRound
          size={"lg"}
        />
      </PopoverTrigger>
      <PopoverContent w={"16vw"} minW={"220px"} marginRight={"20px"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Center p={"3"}>
            <Text fontSize={"18px"} my={"2"}>
              <Flex direction={"row"}>
                <AiFillPhone />
                <Link href="tel:+212697444476" lineHeight={"1rem"}>
                  +212 6 97 44 44 76
                </Link>
              </Flex>
            </Text>
          </Center>
          <Center>
            <Text fontSize={"18px"} my={"2"}>
              <Link href="mailto:herradi.r@gmail.com" isExternal>
                Herradi.R@gmail.com
              </Link>
            </Text>
          </Center>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Footer;
