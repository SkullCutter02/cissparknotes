import { axios } from "../lib/axios";
import IResponse from "../types/response.interface";
import IResponseData from "../types/responseData.interface";
import ISection from "../types/section.interface";

const getSections = async (): Promise<IResponse<IResponseData<ISection>[]>> => {
  const { data } = await axios.get("sections");
  return data;
};

export default getSections;
