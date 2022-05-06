import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SedeDetail } from '../sede-detail';
import { SedeService } from '../sede.service';

@Component({
  selector: 'app-sede-detail',
  templateUrl: './sede-detail.component.html',
  styleUrls: ['./sede-detail.component.css']
})
export class SedeDetailComponent implements OnInit {

  sedeId!: string;
  @Input() sedeDetail!: SedeDetail;



  constructor(private route: ActivatedRoute, private sedeService: SedeService) { }

  ngOnInit() {
    if (this.sedeDetail === undefined){
      this.sedeId = this.route.snapshot.paramMap.get('id')!
    }

    if(this.sedeId){
      this.getSede();
    }
  }

  getSede(){
    this.sedeService.getSede(this.sedeId).subscribe(sede=>{this.sedeDetail=sede;})
  }
}
