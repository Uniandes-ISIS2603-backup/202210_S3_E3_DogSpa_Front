import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {

  servicios: Array<Servicio> = [];

  constructor(private servicioService: ServicioService) { }

  getServicios(): void{
    this.servicioService.getServicios().subscribe((servicios) => {
      this.servicios = servicios;
    })
  }

  ngOnInit() {
    this.getServicios();
  }
}
