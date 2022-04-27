import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ProductoListComponent],
  declarations: [ProductoListComponent]
})
export class ProductoModule { }
