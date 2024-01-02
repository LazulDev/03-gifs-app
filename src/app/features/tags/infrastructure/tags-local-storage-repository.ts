import { Injectable } from '@angular/core';
import {Tag} from "../domain/tag";
import {TagsRepository} from "../domain/tags-repository";

@Injectable()
export class TagsLocalStorageRepository implements TagsRepository {

  private readonly KEY = 'tags';
  set(tags: Tag[]): void {
    localStorage.setItem(this.KEY, JSON.stringify(tags));
  }

  findAll(): Tag[] {
    const tags = localStorage.getItem(this.KEY);
    return tags ? JSON.parse(tags) : [];
  }
}
