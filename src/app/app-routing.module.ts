import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioListComponent } from './servicio/servicio-list/servicio-list.component';
import { PackDeServiciosListComponent } from './pack-de-servicios/pack-de-servicios-list/pack-de-servicios-list.component';
import { HallOfFameListComponent } from './hall-of-fame/hall-of-fame-list/hall-of-fame-list.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { SedeListComponent } from './sede/sede-list/sede-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  //{path: '', component: HomeComponent},
  //{path: 'servicio', component: ServicioListComponent},
  //{path: 'packDeServicios', component: PackDeServiciosListComponent},
  //{path: 'hallOfFame', component: HallOfFameListComponent},
  //{path: 'productos', component: ProductoListComponent},
  //{path: 'sedes', component: SedeListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

