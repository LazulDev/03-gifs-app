import {Component, Input} from '@angular/core';
import {UiCard} from "@shared/components/card/card.component";

@Component({
  selector: 'shared-cards-list',
  standalone: false,
  templateUrl: './cards-list.component.html'
})
export class CardsListComponent {
  @Input({required: true})
  cards: UiCard[] = [];
}
