import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Subject: React.FC = () => {
  return (
    <>
      <Box borderWidth={"1px"} borderRadius={"lg"} w={"100%"} overflow={"hidden"} p={4}>
        <Image
          src={"https://covers.zlibcdn2.com/covers/books/b8/e4/d7/b8e4d737d45edde3d598b251d6acc8c0.jpg"}
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
          《雷雨》
        </Text>
        <Text textAlign={"center"} mt={1} color={"gray.600"} fontSize={{ base: 14, md: 17 }}>
          曹禺
        </Text>
      </Box>
    </>
  );
};

export default Subject;
