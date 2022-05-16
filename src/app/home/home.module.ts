import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SedeModule } from '../sede/sede.module';

@NgModule({
  imports: [
    CommonModule,
    SedeModule
  ],
  providers: [],
  declarations: [HomeComponent]
})
export class HomeModule { }
