import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SedeModule } from '../sede/sede.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SedeModule,
    HomeRoutingModule
  ],
  providers: [],
  declarations: [HomeComponent]
})
export class HomeModule { }
