import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListComponent } from './servicio-list/servicio-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ServicioListComponent
  ],
  exports: [
    ServicioListComponent
  ]
})
export class ServicioModule { }
