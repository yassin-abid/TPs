import { Component } from '@angular/core';
import { BookContainer } from "./book-container/book-container";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookContainer],
  templateUrl: './app.html',
})
export class AppComponent {}
