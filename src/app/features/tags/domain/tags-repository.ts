import {Tag} from "./tag";

export interface TagsRepository {
  set(tags: Tag[]): void;
  findAll(): Tag[];
}
