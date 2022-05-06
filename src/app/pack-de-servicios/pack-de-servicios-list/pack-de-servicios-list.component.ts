import { Component, OnInit } from '@angular/core';
import { PackDeServiciosService } from '../pack-de-servicios.service';
import { PackDeServicios } from '../packDeServicios';

@Component({
  selector: 'app-pack-de-servicios-list',
  templateUrl: './pack-de-servicios-list.component.html',
  styleUrls: ['./pack-de-servicios-list.component.css']
})
export class PackDeServiciosListComponent implements OnInit {

  packs: Array<PackDeServicios> = [];

  constructor(private packServicios: PackDeServiciosService) { }

  getPacksDeServicios() {
    this.packServicios.getPacksDeServicios().subscribe( (packs) => {
      this.packs = packs;
      });
    }

  ngOnInit() {
    this.getPacksDeServicios();
  }

}
