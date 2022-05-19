import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackDeServiciosListComponent } from './pack-de-servicios-list/pack-de-servicios-list.component';
import { PackDeServiciosDetailComponent } from './pack-de-servicios-detail/pack-de-servicios-detail.component';
import { RouterModule } from '@angular/router';
import { PackDeServicioRoutingModule } from './pack-de-servicios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PackDeServicioRoutingModule

  ],
  exports: [PackDeServiciosListComponent],
  declarations: [PackDeServiciosListComponent, PackDeServiciosDetailComponent]
})
export class PackDeServiciosModule { }
