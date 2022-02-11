import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

import IResponseData from "../../../types/responseData.interface";
import ISection from "../../../types/section.interface";
import { useRouter } from "next/router";

interface Props {
  sectionData: IResponseData<ISection>;
}

const Section: React.FC<Props> = ({ sectionData }) => {
  const subjectId = useRouter().query.subjectId;

  return (
    <>
      <Link href={`/${subjectId}/${sectionData.id}`}>
        <Box
          px={2}
          py={5}
          borderTop={"1px solid"}
          borderColor={"gray.300"}
          cursor={"pointer"}
          transition={"all 0.2s"}
          _hover={{
            background: "green.100",
          }}
          _last={{
            borderBottom: "1px solid",
            borderColor: "gray.300",
          }}
        >
          <Heading fontSize={{ base: 20, md: 24 }}>{sectionData.attributes.name}</Heading>
        </Box>
      </Link>
    </>
  );
};

export default Section;
