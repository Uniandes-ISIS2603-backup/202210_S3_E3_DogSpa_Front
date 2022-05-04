import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioListComponent } from './servicio/servicio-list/servicio-list.component';
import { PackDeServiciosComponent } from './pack-de-servicios/pack-de-servicios.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { SedeListComponent } from './sede/sede-list/sede-list.component';

const routes: Routes = [
  {path: 'servicios', component: ServicioListComponent},
  {path: 'packDeServicios', component: PackDeServiciosComponent},
  {path: 'hallOfFame', component: HallOfFameComponent},
  {path: 'productos', component: ProductoListComponent},
  {path: 'sedes', component: SedeListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

