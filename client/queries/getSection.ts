import { axios } from "../lib/axios";

const getSection = async (sectionId: string) => {
  const { data } = await axios.get(`sections/${sectionId}`);
  return data;
};

export default getSection;
