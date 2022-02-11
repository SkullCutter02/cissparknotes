import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Subject from "./Subject";

const Subjects: React.FC = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 2, lg: 3, xl: 4 }} spacing={{ base: "15px", md: "30px", lg: "40px" }}>
        <Subject />
        <Subject />
        <Subject />
        <Subject />
      </SimpleGrid>
    </>
  );
};

export default Subjects;
