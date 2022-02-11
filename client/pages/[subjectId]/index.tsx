import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import getSubject from "../../queries/getSubject";
import getSubjects from "../../queries/getSubjects";

const SubjectPage: React.FC = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const subjectId = context.params.subjectId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["sections", subjectId], () => getSubject(subjectId));

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
