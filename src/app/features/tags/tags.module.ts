import {NgModule, ModuleWithProviders, Type} from '@angular/core';
import {FindRepository} from "../../core/repository/find-repository";
import {TAGS_REPOSITORY_TOKEN, UI_CARDS_TOKEN} from "../../core/utils/injection-tokens";
import {UiCard} from "../../shared/components/card/card.component";
import {TagService} from "./application/tag.service";
import {TagsRepository} from "./domain/tags-repository";

export interface TagsModuleForFeatureConfig {
  uiCardsRepositoryImpl: Type<FindRepository<UiCard[]>>,
  tagRepositoryImpl: Type<TagsRepository>
}

/**
 * Modulo para configurar las dependencias de Tag Service
 *
 * La idea era hacer al tag service agnóstico a la recuperación de los datos
 * De ahí que tengamos dos repositorios
 *    - UiCardRepository, del que se recuperan los datos de la interfaz
 *    - TagsRepository, del que se recuperan y guardan datos de las búsquedas
 *
 * Este módulo facilita establecer la implementación de ambos repositorios del Tag Service.
 */
@NgModule()
export class TagsModule {
  static forFeature(config: TagsModuleForFeatureConfig): ModuleWithProviders<TagsModule> {
    return {
      ngModule: TagsModule,
      providers: [
        TagService,
        {provide: UI_CARDS_TOKEN, useClass: config.uiCardsRepositoryImpl},
        {provide: TAGS_REPOSITORY_TOKEN, useClass: config.tagRepositoryImpl}]
    }
  }
}
