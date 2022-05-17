import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SedeListComponent } from './sede-list/sede-list.component';
import { SedeDetailComponent } from './sede-detail/sede-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  declarations: [SedeListComponent, SedeDetailComponent],
  exports: [SedeListComponent, SedeDetailComponent]
})
export class SedeModule {}
