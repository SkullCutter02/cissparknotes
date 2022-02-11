import IModel from "./model.interface";
import IImage from "./image.interface";

export default interface ISubject extends IModel {
  name: string;
  author: string;
  image: IImage;
}
