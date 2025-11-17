import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/books';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() books: Book[] = [];
  @Input() categories: string[] = [];
  @Output() deleteBook = new EventEmitter<number>();
  @Output() editBook = new EventEmitter<Book>();

  searchTerm: string = '';
  sortBy: string = '';

  get filteredBooks(): Book[] {
    let filtered = this.books.filter(book => 
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.sortBy === 'category') {
      filtered = filtered.sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'available') {
      filtered = filtered.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }

    return filtered;
  }

  get totalBooks(): number {
    return this.filteredBooks.length;
  }
}
