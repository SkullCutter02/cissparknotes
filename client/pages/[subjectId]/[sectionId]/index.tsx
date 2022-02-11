import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import getSubjectsWithSections from "../../../queries/getSubjectsWithSections";
import getSection from "../../../queries/getSection";
import IResponse from "../../../types/response.interface";
import IResponseData from "../../../types/responseData.interface";
import ISection from "../../../types/section.interface";
import MainContainer from "../../../components/ui/MainContainer";
import { Image } from "@chakra-ui/react";
import Navbar from "../../../components/layout/navbar/Navbar";

type Data = IResponse<IResponseData<ISection>>;

const newTheme = {
  img: (props) => {
    const { children } = props;
    return (
      <Image maxH={"500px"} my={7} {...props}>
        {children}
      </Image>
    );
  },
};

const SectionPage: React.FC = () => {
  const sectionId = useRouter().query.sectionId as string;

  const {
    data: { data },
  } = useQuery<Data>(["section", sectionId], () => getSection(sectionId));

  return (
    <>
      <Navbar />
      <MainContainer>
        {data.attributes?.body && (
          <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={data.attributes.body} />
        )}
      </MainContainer>
    </>
  );
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
