import {Component, ElementRef, ViewChild} from '@angular/core';
import {TagService} from "@features/tags/application/tag.service";

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  @ViewChild('inputTag', {static: true})
  public inputTag!: ElementRef<HTMLInputElement>;

  constructor(private readonly tagService: TagService) {}

  searchTag() {
    this.tagService.findTag(this.inputTag.nativeElement.value);

    this.inputTag.nativeElement.value = '';
  }
}
