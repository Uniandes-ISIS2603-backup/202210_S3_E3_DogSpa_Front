import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';
import { ServicioDetail } from '../servicio-detail';
import { SedeService } from 'src/app/sede/sede.service';
import { Sede } from 'src/app/sede/sede';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {

  servicios: Array<ServicioDetail> = [];
  selected: Boolean = false;
  selectedService!: ServicioDetail;
  sedes: Array<Sede>=[];
  sede: string ='1';

  constructor(private servicioService: ServicioService, private sedeService:SedeService, private serviceSede:ServicioService) { }

  getServicios(): void{
    this.servicioService.getServicios().subscribe({next: servicios =>
      this.servicios = servicios, error: e=>console.error(e)
    });
  }

  onSelected(servicio: ServicioDetail): void {
    this.selected = true;
    this.selectedService = servicio;
  }

  getSedes():void
  {
    this.sedeService.getSedes().subscribe((sedes)=>
    {
      this.sedes =sedes;
    });
  }


  getServicioenSede(idSede:string): void
  {
  this.servicioService.getServicioenSede(idSede).subscribe((servicios)=>
  {
    this.servicios = servicios;
  });
  }


  ngOnInit() {
    this.getServicios();
    //this.getSedes();
    //this.getServicioenSede(this.sede);

  }

  setSede():void
  {
    let value = (<HTMLSelectElement> document.getElementById('sede-select-service')).value;
    this.sede= value;
    this.getServicioenSede(value);
    this.selected = false;
  }
}
