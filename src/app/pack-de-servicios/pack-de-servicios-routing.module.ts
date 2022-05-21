import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackDeServiciosDetailComponent } from './pack-de-servicios-detail/pack-de-servicios-detail.component';
import { PackDeServiciosListComponent } from './pack-de-servicios-list/pack-de-servicios-list.component';


const routes: Routes = [{
  path: 'packDeServicios',
  children: [
    {
      path: '',
      component: PackDeServiciosListComponent
    },
    {
      path: ':id',
      component: PackDeServiciosDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackDeServicioRoutingModule { }



