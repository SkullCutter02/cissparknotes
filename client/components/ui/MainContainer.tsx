import React from "react";
import { Box } from "@chakra-ui/react";

const MainContainer: React.FC = ({ children }) => {
  return (
    <>
      <Box as={"main"} px={"7vw"} py={7}>
        {children}
      </Box>
    </>
  );
};

export default MainContainer;
