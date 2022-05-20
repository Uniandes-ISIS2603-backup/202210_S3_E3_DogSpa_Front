import { Component, OnInit } from '@angular/core';
import { HallOfFame } from '../hallOfFame';
import { HallOfFameService } from '../hallOfFame.service';

@Component({
  selector: 'app-hall-of-fame-gallery',
  templateUrl: './hall-of-fame-gallery.component.html',
  styleUrls: ['./hall-of-fame-gallery.component.css']
})
export class HallOfFameGalleryComponent implements OnInit {

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
