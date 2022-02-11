import { axios } from "../lib/axios";

const getSubjects = async () => {
  const { data } = await axios.get("subjects?populate=image");
  return data;
};

export default getSubjects;
