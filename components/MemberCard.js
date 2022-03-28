import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";

function MemberCard({ employee }) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={"/randomuser.jpg"}
          alt={`Picture of ${employee.name}`}
          roundedTop="lg"
        />
        <Center py={6}>
          <Box w={"full"} rounded={"lg"} p={6} textAlign={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {employee.name}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              {employee.mail || "snbat@gmail.com"}
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              {employee.role}
            </Text>

            {/* <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #photography
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #music
              </Badge>
            </Stack> */}
          </Box>
        </Center>
      </Box>
    </Flex>
  );
}

export default MemberCard;
