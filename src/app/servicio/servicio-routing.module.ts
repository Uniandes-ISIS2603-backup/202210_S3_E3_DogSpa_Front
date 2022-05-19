import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';
import { ServicioListComponent } from './servicio-list/servicio-list.component';


const routes: Routes = [{
  path: 'servicios',
  children: [
    {
      path: 'list',
      component: ServicioListComponent
    },
    {
      path: ':id',
      component: ServicioDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }



