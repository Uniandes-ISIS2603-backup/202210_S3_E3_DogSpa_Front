import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallOfFameGalleryComponent } from './hall-of-fame-gallery/hall-of-fame-gallery.component';
import { HallOfFameCarouselComponent } from './hall-of-fame-carousel/hall-of-fame-carousel.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [HallOfFameGalleryComponent, HallOfFameCarouselComponent],
  exports: [HallOfFameGalleryComponent, HallOfFameCarouselComponent]
})
export class HallOfFameModule { }
