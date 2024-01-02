import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "@shared/components/card/card.component";
import {CardsListComponent} from "@shared/components/cards-list/cards-list.component";
import {LazyImageComponent} from "@shared/components/lazy-image/lazy-image.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";

const COMPONENTS = [
  LazyImageComponent,
  CardComponent,
  CardsListComponent,
  SidebarComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
  ],
  exports: [COMPONENTS]
})
export class SharedModule { }
