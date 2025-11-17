import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../models/books';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {
  @Output() bookAdded = new EventEmitter<Book>();
  @Output() bookUpdated = new EventEmitter<Book>();
  
  @Input() set bookToEdit(book: Book | null) {
    if (book) {
      this.book = { ...book };
      this.isEditMode = true;
    }
  }

  book: Book = {
    id: 0,
    title: '',
    author: '',
    publisherEmail: '',
    publisherPhone: '',
    releaseDate: '',
    category: '',
    isAvailable: true,
    stock: 0
  };

  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];
  maxDate: string = new Date().toISOString().split('T')[0];
  isEditMode: boolean = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Déterminer la disponibilité selon le stock
      this.book.isAvailable = (this.book.stock ?? 0) > 0;
      
      if (this.isEditMode) {
        // Mode édition : émettre le livre mis à jour
        this.bookUpdated.emit({ ...this.book });
      } else {
        // Mode ajout : générer un nouvel id
        this.book.id = Date.now();
        this.bookAdded.emit({ ...this.book });
      }
      
      // Réinitialiser le formulaire et revenir en mode ajout
      form.resetForm();
      this.isEditMode = false;
      this.book = {
        id: 0,
        title: '',
        author: '',
        publisherEmail: '',
        publisherPhone: '',
        releaseDate: '',
        category: '',
        isAvailable: true,
        stock: 0
      };
    }
  }
}
