import {Component, EventEmitter, Output} from '@angular/core';
import {TagService} from "@features/tags/application/tag.service";

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() tagClicked = new EventEmitter<string>();
  get tags(): string[] {
    return this.tagsService.tagHistory;
  }

  constructor(private readonly tagsService: TagService) { }

  onTagClicked(tag: string) {
    this.tagClicked.emit(tag);
  }
}
