import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ProductoListComponent],
  declarations: [ProductoListComponent,ProductoDetailComponent]
})
export class ProductoModule { }
