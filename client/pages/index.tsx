import React from "react";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import Subjects from "../components/ui/subject/Subjects";
import getSubjects from "../queries/getSubjects";
import MainContainer from "../components/ui/MainContainer";
import getSubjectsWithSections from "../queries/getSubjectsWithSections";
import Layout from "../components/layout/Layout";

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
  await queryClient.prefetchQuery("subjects-nav", () => getSubjectsWithSections());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

(HomePage as any).Layout = Layout;

export default HomePage;
