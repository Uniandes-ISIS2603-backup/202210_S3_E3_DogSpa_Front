import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioRoutingModule } from './servicio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ServicioRoutingModule
  ],
  declarations: [
    ServicioListComponent,
    ServicioDetailComponent
  ],
  exports: [
    ServicioListComponent
  ]
})
export class ServicioModule { }
