import { Box } from "@chakra-ui/layout";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function PageLayout({ children }) {
  return (
    <Box>
      <Box w={"100%"} bg={"gray.800"} h={"60px"} p={"0"}>
        {/* <Header /> */}
        <Navbar />
      </Box>
      {children}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default PageLayout;
