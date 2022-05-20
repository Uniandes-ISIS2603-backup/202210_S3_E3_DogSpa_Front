import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallOfFameListComponent } from './hall-of-fame-list/hall-of-fame-list.component';
import { HallOfFameGalleryComponent } from './hall-of-fame-gallery/hall-of-fame-gallery.component';


const routes: Routes = [{
  path: 'hallOfFame',
  children: [
    {
      path: 'list',
      component: HallOfFameListComponent
    },
    {
      path: 'gallery',
      component: HallOfFameGalleryComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HallOfFameRoutingModule { }



