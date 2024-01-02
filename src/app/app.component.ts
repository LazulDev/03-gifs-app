import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {Component} from '@angular/core';
import {GifsModule} from "@features/gifs/gifs.module";
import {TagService} from "@features/tags/application/tag.service";
import {SharedModule} from "@shared/shared.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    GifsModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  searchTags: string[];

  constructor(private readonly tagService: TagService) {
    this.searchTags = tagService.tagHistory;
  }

  searchTag(tag: string) {
    this.tagService.findTag(tag);
  }
}
