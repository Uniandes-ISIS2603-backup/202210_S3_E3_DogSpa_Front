import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallOfFameListComponent } from './hall-of-fame-list/hall-of-fame-list.component';
import { HallOfFameGalleryComponent } from './hall-of-fame-gallery/hall-of-fame-gallery.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HallOfFameRoutingModule } from './hall-of-fame-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HallOfFameRoutingModule
  ],
  declarations: [HallOfFameListComponent, HallOfFameGalleryComponent],
  exports: [HallOfFameListComponent, HallOfFameGalleryComponent]
})
export class HallOfFameModule { }
