import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SedeModule } from '../sede/sede.module';
import { HomeRoutingModule } from './home-routing.module';
import { ContactoModule } from '../contacto/contacto.module';
import { HallOfFameModule } from '../hall-of-fame/hall-of-fame.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    SedeModule,
    HomeRoutingModule,
    ContactoModule,
    HallOfFameModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  declarations: [HomeComponent]
})
export class HomeModule { }
