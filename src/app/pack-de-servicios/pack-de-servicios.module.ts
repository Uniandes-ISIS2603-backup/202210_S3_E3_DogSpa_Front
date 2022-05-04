import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackDeServiciosListComponent } from './pack-de-servicios-list/pack-de-servicios-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PackDeServiciosListComponent],
  declarations: [PackDeServiciosListComponent]
})
export class PackDeServiciosModule { }
