import { Component, OnInit } from '@angular/core';
import { HallOfFame } from '../hallOfFame';
import { HallOfFameService } from '../hallOfFame.service';

@Component({
  selector: 'app-hall-of-fame-list',
  templateUrl: './hall-of-fame-list.component.html',
  styleUrls: ['./hall-of-fame-list.component.css']
})
export class HallOfFameListComponent implements OnInit {

  hallsOfFame: Array<HallOfFame> = [];

  constructor(private hallOfFameService : HallOfFameService ) { }

  getHallsOfFame(): void {
    this.hallOfFameService.getHallsOfFame().subscribe((hallsOfFame) => {
      this.hallsOfFame = hallsOfFame;
    });
  }

  ngOnInit() {
    this.getHallsOfFame();
    console.log(this.hallsOfFame);
  }

}
