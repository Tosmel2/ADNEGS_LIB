import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookModalComponent } from './modal/add-book-modal/add-book-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddBookModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddBookModalComponent
  ]
})
export class SharedModule { }
