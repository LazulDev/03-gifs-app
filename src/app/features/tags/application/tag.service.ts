import {Inject, Injectable} from '@angular/core';
import {FindRepository} from "../../../core/repository/find-repository";
import {TAGS_REPOSITORY_TOKEN, UI_CARDS_TOKEN} from "../../../core/utils/injection-tokens";
import {UiCard} from "../../../shared/components/card/card.component";
import {Tag} from "../domain/tag";
import {TagsRepository} from "../domain/tags-repository";


@Injectable()
export class TagService {

  private _cards: UiCard[] = [];
  constructor(
    @Inject(UI_CARDS_TOKEN) private readonly uiCardRepository: FindRepository<UiCard[]>,
    @Inject(TAGS_REPOSITORY_TOKEN) private readonly tagsRepository: TagsRepository
  ) { }

  get tagHistory(): Tag[] {
    return this.tagsRepository.findAll();
  }

  get cards(): UiCard[] {
    return [...this._cards];
  }

  public load() {
    if (this.tagHistory.length === 0) return;

    this.findTag(this.tagHistory[0]);
  }

  public findTag(tag: string) {
    if (tag.length === 0) return;

    this.uiCardRepository.findByQuery(tag)
      .subscribe((response: UiCard[])=> {
      this._cards = response
    })

    this.sortHistory(tag.toLowerCase());

    const history = this.tagHistory;
    history.unshift(tag);

    this.tagsRepository.set(history.slice(0, 9));
  }

  private sortHistory(newTag: string) {
    newTag = newTag.toLowerCase();

    if (this.tagHistory.includes(newTag)) {
      this.tagsRepository.set(this.tagHistory.filter(tag => tag !== newTag));
    }
  }
}
