import { Component, OnInit } from '@angular/core';
import { Sede } from '../sede';
import { SedeDetail } from '../sede-detail';
import { SedeService } from '../sede.service';


@Component({
  selector: 'app-sede-list',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit {

  selectedSede!: SedeDetail;
  selected: Boolean = false;
  sedes: Array<Sede> = [];

  onSelected(sede: Sede): void {
    this.selected = true;
    this.selectedSede = sede;
  }

  constructor(private sedeService: SedeService) { }

  getSedes():void{
    this.sedeService.getSedes().subscribe((sedes) => {
      this.sedes = sedes;
    })
  }

  ngOnInit() {
    this.getSedes();
  }

}
