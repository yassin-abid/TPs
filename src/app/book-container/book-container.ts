import { Component } from '@angular/core';
import { Book } from '../models/books';
import { BookList } from '../book-list/book-list';
import { BookForm } from '../book-form/book-form';

@Component({
  selector: 'app-book-container',
  imports: [ BookList, BookForm ],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})
export class BookContainer {

books: Book[] = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      publisherEmail: 'pub@cleancode.com',
      publisherPhone: '12345678',
      releaseDate: '2008-08-01',
      category: 'Informatique',
      isAvailable: true,
      stock: 5
    },
    {
      id: 2,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      publisherEmail: 'editeur@lp.fr',
      publisherPhone: '87654321',
      releaseDate: '1943-04-06',
      category: 'Roman',
      isAvailable: false,
      stock: 0
    }
  ];
  
  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];
  bookToEdit: Book | null = null;

  addBook(book: Book) {
    this.books.push(book);
  }

  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
  }

  editBook(book: Book) {
    this.bookToEdit = book;
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    this.bookToEdit = null;
  }
}
