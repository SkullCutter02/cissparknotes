import React from "react";
import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import Subjects from "../components/ui/subject/Subjects";
import getSubjects from "../queries/getSubjects";

const HomePage: React.FC = () => {
  return (
    <>
      <Box as={"main"} px={"7vw"} py={7}>
        <Subjects />
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("subjects", () => getSubjects());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
