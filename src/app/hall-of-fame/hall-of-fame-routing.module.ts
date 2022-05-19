import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallOfFameListComponent } from './hall-of-fame-list/hall-of-fame-list.component';


const routes: Routes = [{
  path: 'hallOfFame',
  children: [
    {
      path: 'list',
      component: HallOfFameListComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HallOfFameRoutingModule { }



