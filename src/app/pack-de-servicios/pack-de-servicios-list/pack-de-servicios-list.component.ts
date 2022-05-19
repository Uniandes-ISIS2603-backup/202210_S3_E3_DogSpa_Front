import { Component, OnInit } from '@angular/core';
import { PackDeServiciosService } from '../pack-de-servicios.service';
import { PackDeServiciosDetail } from '../pack-de-servicios-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pack-de-servicios-list',
  templateUrl: './pack-de-servicios-list.component.html',
  styleUrls: ['./pack-de-servicios-list.component.css']
})
export class PackDeServiciosListComponent implements OnInit {

  packs: Array<PackDeServiciosDetail> = [];
  selectedPack!: PackDeServiciosDetail;
  isSelected: Boolean = false;

  constructor(private packServicios: PackDeServiciosService,
              private router: Router) { }

  getPacksDeServicios() {
    this.packServicios.getPacksDeServicios().subscribe({next: packs => this.packs = packs, error: e => console.error(e)});
    console.log(this.packs);
  }

  onSelected(pack: PackDeServiciosDetail): void {
    /*
    this.isSelected = true;
    this.selectedPack = pack;
    console.log(this.selectedPack);
    */
   console.log(pack.id);
   this.router.navigateByUrl('/packDeServicios/'+ pack.id);
  }

  ngOnInit() {
    this.getPacksDeServicios();
  }

}
