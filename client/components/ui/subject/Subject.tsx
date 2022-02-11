import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
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
        <Link href={`/${subjectId}`}>
          <Text
            textAlign={"center"}
            mt={4}
            fontSize={{ base: 17, md: 20 }}
            display={"block"}
            cursor={"pointer"}
            _hover={{
              textDecoration: "underline",
            }}
          >
            《{subject.name}》
          </Text>
        </Link>
        <Text textAlign={"center"} mt={1} color={"gray.600"} fontSize={{ base: 14, md: 17 }}>
          {subject.author}
        </Text>
      </Box>
    </>
  );
};

export default Subject;
