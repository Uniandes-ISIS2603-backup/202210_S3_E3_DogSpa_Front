import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { RouterModule } from '@angular/router';
import { ProductoRoutingModule } from './producto-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductoRoutingModule,
    ButtonsModule
  ],
  exports:[ProductoListComponent],
  declarations: [ProductoListComponent,ProductoDetailComponent]
})
export class ProductoModule { }
