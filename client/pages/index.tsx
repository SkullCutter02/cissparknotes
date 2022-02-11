import React from "react";
import { Box } from "@chakra-ui/react";

import Subjects from "../components/ui/subject/Subjects";

const HomePage: React.FC = () => {
  return (
    <>
      <Box as={"main"} px={"7vw"} py={7}>
        <Subjects />
      </Box>
    </>
  );
};

export default HomePage;
