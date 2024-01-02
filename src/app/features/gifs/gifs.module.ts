import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GifsHttpRepository} from "@features/gifs/infrastructure/gifs-http-repository";
import {TagsLocalStorageRepository} from "@features/tags/infrastructure/tags-local-storage-repository";
import {TagsModule} from "@features/tags/tags.module";
import {SharedModule} from "@shared/shared.module";
import {SearchBoxComponent} from "./components/search-box/search-box.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";


const COMPONENTS =  [SearchBoxComponent];
const PAGES = [HomePageComponent];

@NgModule({
  declarations: [PAGES, COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    TagsModule.forFeature({
      uiCardsRepositoryImpl: GifsHttpRepository,
      tagRepositoryImpl: TagsLocalStorageRepository
    })
  ],
  exports: [PAGES],
})
export class GifsModule { }
