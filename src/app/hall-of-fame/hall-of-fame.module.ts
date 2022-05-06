import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallOfFameListComponent } from './hall-of-fame-list/hall-of-fame-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [HallOfFameListComponent],
  exports: [HallOfFameListComponent]
})
export class HallOfFameModule { }
