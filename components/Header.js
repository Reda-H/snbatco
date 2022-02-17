import {
  Box,
  Center,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import NextLink from "next/link";
import { MdHome } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";

let menuItems = [
  {
    name: "Accueil",
    route: "/",
    logo: MdHome,
  },
  {
    name: "A Propos",
    route: "/about",
    logo: BsInfoSquareFill,
  },
  {
    name: "L'Equipe",
    route: "/team",
    logo: RiTeamFill,
  },
  {
    name: "Contacts",
    route: "/contact",
    logo: AiFillPhone,
  },
];

function Header() {
  return (
    <Flex direction={"row"} h={"60px"}>
      <Box w={"60%"}>
        <LinkBox>
          <NextLink href={"/"} passHref>
            <LinkOverlay>
              <Heading
                color={"white"}
                m={"5px"}
                fontSize={"4xl"}
                letterSpacing={"tight"}
              >
                SNBAT.
              </Heading>
            </LinkOverlay>
          </NextLink>
        </LinkBox>
      </Box>
      <Box w={"40%"} color={"white"}>
        <Center height={"60px"}>
          <List display={"flex"} flexDirection={"row"} w={"100%"}>
            {menuItems.map((item) => (
              <ListItem px={"10px"} w={"30%"} fontSize={"16px"} key={"home"}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={item.logo} color={"white"} mr={"10px"} />{" "}
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Center>
      </Box>
    </Flex>
  );
}

export default Header;
