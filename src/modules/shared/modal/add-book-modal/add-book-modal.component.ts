import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/modules/public/services/book.service';


@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})

export class AddBookModalComponent implements OnInit {
  bookForm: FormGroup;
  @Input() modalOpen = false;
  @Output() modalClose = new EventEmitter();

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // openModal() {
  //   this.modalOpen = true;
  // }

  closeModal() {
    this.modalClose.emit()
    // this.modalOpen = false;
    this.bookForm.reset(); // Optionally reset the form when closing the modal
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const bookData = this.bookForm.value;
      this.bookService.addBook(bookData).subscribe(
        (response) => {
          console.log('Book added successfully', response);
          this.closeModal();
        },
        (error) => {
          console.error('Error adding book', error);
        }
      );
    }
  }
}

