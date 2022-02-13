import React from "react";
import { Box, VStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import IResponseData from "../../../types/responseData.interface";
import ISubject from "../../../types/subject.interface";

interface Props {
  subjectData: IResponseData<ISubject>;
}

const Subject: React.FC<Props> = ({ subjectData: { id: subjectId, attributes: subject } }) => {
  return (
    <>
      <Box borderWidth={"1px"} borderRadius={"lg"} w={"100%"} overflow={"hidden"} p={4}>
        <Image src={subject.image} w={"100%"} h={{ base: "240px", sm: "350px" }} objectFit={"cover"} />
        <VStack spacing={1}>
          <Link href={`/${subjectId}`}>
            <Text
              mt={4}
              maxW={"max-content"}
              fontSize={{ base: 17, md: 20 }}
              cursor={"pointer"}
              _hover={{
                textDecoration: "underline",
              }}
            >
              《{subject.name}》
            </Text>
          </Link>
          <Text color={"gray.600"} fontSize={{ base: 14, md: 17 }}>
            {subject.author}
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default Subject;
