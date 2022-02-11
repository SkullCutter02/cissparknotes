import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";

import Subject from "./Subject";
import getSubjects from "../../../queries/getSubjects";
import IResponse from "../../../types/response.interface";
import IResponseData from "../../../types/responseData.interface";
import ISubject from "../../../types/subject.interface";

type Data = IResponse<IResponseData<ISubject>[]>;

const Subjects: React.FC = () => {
  const {
    data: { data },
  } = useQuery<Data>("subjects", () => getSubjects());

  return (
    <>
      <SimpleGrid columns={{ base: 2, lg: 3, xl: 4 }} spacing={{ base: "15px", md: "30px", lg: "40px" }}>
        {data.map((subjectData) => (
          <Subject key={"subject" + subjectData.id} subjectData={subjectData} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Subjects;
