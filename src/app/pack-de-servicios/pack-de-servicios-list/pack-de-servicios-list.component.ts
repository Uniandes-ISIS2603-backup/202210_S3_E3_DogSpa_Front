import { Component, OnInit } from '@angular/core';
import { PackDeServiciosService } from '../pack-de-servicios.service';
import { PackDeServiciosDetail } from '../pack-de-servicios-detail';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Servicio } from 'src/app/servicio/servicio';

@Component({
  selector: 'app-pack-de-servicios-list',
  templateUrl: './pack-de-servicios-list.component.html',
  styleUrls: ['./pack-de-servicios-list.component.css']
})
export class PackDeServiciosListComponent implements OnInit {

  packs: Array<PackDeServiciosDetail> = [];
  selectedPack!: PackDeServiciosDetail;
  isSelected: Boolean = false;

  constructor(private packServicios: PackDeServiciosService) { }

  getPacksDeServicios() {
    this.packServicios.getPacksDeServicios().subscribe({next: packs => this.packs = packs, error: e => console.error(e)});
  }

  onSelected(pack: PackDeServiciosDetail) {
    this.isSelected = true;
    this.selectedPack = pack;
    console.log(this.selectedPack);
  }

  ngOnInit() {
    this.getPacksDeServicios();
  }

}
