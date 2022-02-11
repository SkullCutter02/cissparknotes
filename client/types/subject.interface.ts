import Model from "./model.interface";

export default interface Subject extends Model {
  name: string;
  author: string;
}
