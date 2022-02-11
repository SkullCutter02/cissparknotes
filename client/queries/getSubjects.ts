import { axios } from "../lib/axios";
import IResponse from "../types/response.interface";
import IResponseData from "../types/responseData.interface";
import ISubject from "../types/subject.interface";

const getSubjects = async (): Promise<IResponse<IResponseData<ISubject>[]>> => {
  const { data } = await axios.get("subjects");
  return data;
};

export default getSubjects;
