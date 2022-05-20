import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactCreateComponent } from './contact-create/contact-create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[ContactCreateComponent],
  declarations: [ContactCreateComponent]
})
export class ContactoModule { }
