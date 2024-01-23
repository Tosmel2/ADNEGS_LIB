import { Component, Input } from '@angular/core';
// import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.css'],
})
export class BookSectionComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() books: any[] = [];
  @Input() endpoint: string = '';
}
