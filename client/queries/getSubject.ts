import { axios } from "../lib/axios";

const getSubject = async (subjectId: string) => {
  const { data } = await axios.get(`subjects/${subjectId}?populate=sections`);
  return data;
};

export default getSubject;
