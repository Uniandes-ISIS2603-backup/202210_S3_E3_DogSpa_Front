import { Component, OnInit } from '@angular/core';
import { Sede } from '../sede';
import { SedeService } from '../sede.service';

@Component({
  selector: 'app-sede-list',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit {

  sedes: Array<Sede> = [];

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
