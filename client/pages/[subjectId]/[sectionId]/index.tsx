import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import getSubjectsWithSections from "../../../queries/getSubjectsWithSections";
import getSection from "../../../queries/getSection";

const SectionPage: React.FC = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const sectionId = context.params.sectionId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["section", sectionId], () => getSection(sectionId));
  await queryClient.prefetchQuery("subjects-nav", () => getSubjectsWithSections());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getSubjectsWithSections();

  const paths = data.data
    .map(({ id: subjectId, attributes: { sections } }) =>
      sections.data.map((sectionData) => ({
        params: { subjectId: subjectId.toString(), sectionId: sectionData.id.toString() },
      }))
    )
    .flat();

  return { paths, fallback: false };
};

export default SectionPage;
