import { Box } from "@chakra-ui/layout";
import Footer from "./Footer";
import Navbar from "./Navbar";

function PageLayout({ children }) {
  return (
    <Box>
      <Box w={"100%"} bg={"gray.800"} p={"0"}>
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
