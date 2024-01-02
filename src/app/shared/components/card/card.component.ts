import {Component, Input} from '@angular/core';

export interface UiImage {
  url: string;
  height?: string;
  width?: string;
  size?: string;
}
export interface UiCard {
  image: UiImage;
  description: string;
}
@Component({
  selector: 'shared-card',
  standalone: false,
  templateUrl: './card.component.html'
})
export class CardComponent {
 @Input({required: true}) card!: UiCard;
}
