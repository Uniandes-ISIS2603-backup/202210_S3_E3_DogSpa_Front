import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedeListComponent } from './sede-list/sede-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SedeListComponent],
  exports: [SedeListComponent]
})
export class SedeModule { }
