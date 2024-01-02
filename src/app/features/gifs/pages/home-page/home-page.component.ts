import {Component, OnInit} from '@angular/core';
import {TagService} from "@features/tags/application/tag.service";

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  get cards() {
    return this.tagService.cards;
  }
  constructor(private readonly tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.load();
  }
}
