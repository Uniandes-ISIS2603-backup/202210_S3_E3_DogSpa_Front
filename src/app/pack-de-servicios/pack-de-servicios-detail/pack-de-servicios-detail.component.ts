import { Component, Input, OnInit } from '@angular/core';
import { PackDeServiciosDetail } from '../pack-de-servicios-detail';
import { ActivatedRoute } from '@angular/router';
import { PackDeServiciosService } from '../pack-de-servicios.service';

@Component({
  selector: 'app-pack-de-servicios-detail',
  templateUrl: './pack-de-servicios-detail.component.html',
  styleUrls: ['./pack-de-servicios-detail.component.css']
})
export class PackDeServiciosDetailComponent implements OnInit {

  packId!: string;
  @Input() packDetail!: PackDeServiciosDetail;

  constructor(private packsService: PackDeServiciosService) { }

  getPackDeServicio(): void {
    this.packsService.getPacksDeServicio(this.packId).subscribe(pack => {
      this.packDetail = pack;
    });
  }

  ngOnInit() {
    this.getPackDeServicio();
  }

}
