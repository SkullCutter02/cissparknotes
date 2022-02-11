import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import IResponseData from "../../../types/responseData.interface";
import ISubject from "../../../types/subject.interface";
import HOST from "../../../constants/host";

interface Props {
  subjectData: IResponseData<ISubject>;
}

const Subject: React.FC<Props> = ({ subjectData: { attributes: subject } }) => {
  return (
    <>
      <Box borderWidth={"1px"} borderRadius={"lg"} w={"100%"} overflow={"hidden"} p={4}>
        <Image
          src={HOST + subject.image.data.attributes.formats.large.url}
          w={"100%"}
          h={{ base: "240px", sm: "350px" }}
          objectFit={"cover"}
        />
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
        <Text textAlign={"center"} mt={1} color={"gray.600"} fontSize={{ base: 14, md: 17 }}>
          {subject.author}
        </Text>
      </Box>
    </>
  );
};

export default Subject;
