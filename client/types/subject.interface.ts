import IModel from "./model.interface";
import IImage from "./image.interface";
import ISection from "./section.interface";
import IResponseData from "./responseData.interface";

export default interface ISubject extends IModel {
  name: string;
  author: string;
  image: IImage;
  sections?: {
    data: IResponseData<ISection>[];
  };
}
