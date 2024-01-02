import {InjectionToken} from "@angular/core";
import {TagsRepository} from "@features/tags/domain/tags-repository";
import {UiCard} from "@shared/components/card/card.component";
import {FindRepository} from "../repository/find-repository";

export const UI_CARDS_TOKEN = new InjectionToken<FindRepository<UiCard>>('Find UiCards by query token');
export const TAGS_REPOSITORY_TOKEN = new InjectionToken<TagsRepository>('Tags repository token');
