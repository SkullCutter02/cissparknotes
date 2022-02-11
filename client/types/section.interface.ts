import IModel from "./model.interface";

export default interface ISection extends IModel {
  name: string;
  body: string | null;
}
