import { axios } from "../lib/axios";

const getSubjectsWithSections = async () => {
  const { data } = await axios.get("subjects?populate=sections");
  return data;
};

export default getSubjectsWithSections;
