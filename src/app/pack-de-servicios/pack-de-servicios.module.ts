import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackDeServiciosListComponent } from './pack-de-servicios-list/pack-de-servicios-list.component';
import { PackDeServiciosDetailComponent } from './pack-de-servicios-detail/pack-de-servicios-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PackDeServiciosListComponent],
  declarations: [PackDeServiciosListComponent, PackDeServiciosDetailComponent]
})
export class PackDeServiciosModule { }
