import React from "react";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import Subjects from "../components/ui/subject/Subjects";
import getSubjects from "../queries/getSubjects";
import MainContainer from "../components/ui/MainContainer";

const HomePage: React.FC = () => {
  return (
    <>
      <MainContainer>
        <Subjects />
      </MainContainer>
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
