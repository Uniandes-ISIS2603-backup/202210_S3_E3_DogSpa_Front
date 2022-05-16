import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SedeModule } from '../sede/sede.module';
import { SedeListComponent } from '../sede/sede-list/sede-list.component';
import { SedeDetailComponent } from '../sede/sede-detail/sede-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SedeModule
  ],
  providers: [],
  declarations: [HomeComponent]
})
export class HomeModule { }
