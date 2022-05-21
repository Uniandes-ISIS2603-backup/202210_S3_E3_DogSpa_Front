import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoModule } from './producto.module';

const routes: Routes = [{
  path: 'productos',
  children: [
    {
      path: 'list',
      component: ProductoListComponent
    },
    {
      path: ':id',
      component: ProductoDetailComponent
    },
  ]
}, { path: '**', component: PagenotfoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }



