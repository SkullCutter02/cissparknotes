import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";

import getSubject from "../../queries/getSubject";
import getSubjects from "../../queries/getSubjects";
import IResponse from "../../types/response.interface";
import IResponseData from "../../types/responseData.interface";
import ISubject from "../../types/subject.interface";
import MainContainer from "../../components/ui/MainContainer";
import { Heading, VStack } from "@chakra-ui/react";
import Section from "../../components/ui/section/Section";
import getSubjectsWithSections from "../../queries/getSubjectsWithSections";
import Navbar from "../../components/layout/navbar/Navbar";

type Data = IResponse<IResponseData<ISubject>>;

const SubjectPage: React.FC = () => {
  const subjectId = useRouter().query.subjectId as string;

  const {
    data: { data },
  } = useQuery<Data>(["sections", subjectId], () => getSubject(subjectId));

  return (
    <>
      <Navbar />
      <MainContainer>
        <Heading textAlign={"center"}>《{data.attributes.name}》</Heading>
        <VStack spacing={0} align={"stretch"} mt={7}>
          {data.attributes.sections.data.map((sectionData) => (
            <Section key={sectionData.id} sectionData={sectionData} />
          ))}
        </VStack>
      </MainContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const subjectId = context.params.subjectId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["sections", subjectId], () => getSubject(subjectId));
  await queryClient.prefetchQuery("subjects-nav", () => getSubjectsWithSections());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getSubjects();

  const paths = data.data.map((subjectData) => ({
    params: { subjectId: subjectData.id.toString() },
  }));

  return { paths, fallback: false };
};

export default SubjectPage;
