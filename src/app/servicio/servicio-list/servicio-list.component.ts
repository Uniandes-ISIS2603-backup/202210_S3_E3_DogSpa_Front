import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';
import { ServicioDetail } from '../servicio-detail';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {

  servicios: Array<ServicioDetail> = [];
  selected: Boolean = false;
  selectedService!: ServicioDetail;


  constructor(private servicioService: ServicioService) { }

  getServicios(): void{
    this.servicioService.getServicios().subscribe({next: servicios =>
      this.servicios = servicios, error: e=>console.error(e)
    });
  }

  onSelected(servicio: ServicioDetail): void {
    this.selected = true;
    this.selectedService = servicio;
  }

  ngOnInit() {
    this.getServicios();
  }
}
