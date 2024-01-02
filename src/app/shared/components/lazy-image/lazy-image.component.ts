import {Component, Input} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {

  @Input({required: true}) src!: string;

  @Input({required: true}) alt!: string;

  @Input() customClass?: string;

}
