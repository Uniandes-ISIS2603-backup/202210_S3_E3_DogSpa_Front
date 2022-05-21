import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HallOfFame } from '../hallOfFame';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hall-of-fame-carousel',
  templateUrl: './hall-of-fame-carousel.component.html',
  styleUrls: ['./hall-of-fame-carousel.component.css'],
  animations: [
    trigger('slide in', [
      state('left', style({
        opacity: 0,
        transform: 'translateX(-100%)'
        })),
      state('middle', style({
        opacity: 0,
        transform: 'translateX(0)'
        })),
      state('left', style({
        opacity: 0,
        transform: 'translateX(100%)'
        })),
      transition('left => middle', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('25ms')
      ]),
      transition('right => middle', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('25ms')
      ]),
      transition('middle => *', [
        animate('25ms')
      ])
    ])
  ]
})
export class HallOfFameCarouselComponent implements OnInit {

  @Input()
  hallsOfFame!: Array<HallOfFame>;
  @Input()
  selectedHallOfFame!: number;
  @Output() closeCarousel = new EventEmitter<void>();
  public animState= 'middle';
  public animHallOfFame!: number;

  constructor() { }

  ngOnInit(): void {
    this.animHallOfFame = this.selectedHallOfFame;
  }

  public close(): void {
    this.closeCarousel.emit();
  }

  public previous(): void {
    this.animState = 'left';
    this.selectedHallOfFame = this.selectedHallOfFame > 0 ? this.selectedHallOfFame - 1 : this.hallsOfFame.length - 1;
    this.blur();
  }

  public next(): void {
    this.animState = 'right';
    this.selectedHallOfFame = this.selectedHallOfFame < this.hallsOfFame.length - 1 ? this.selectedHallOfFame + 1 : 0;
    this.blur();
  }

  public animDone(): void {
    this.animHallOfFame = this.selectedHallOfFame;
    this.animState = 'middle';
  }

  public onEvent(event: Event): void {
    event.stopPropagation();
  }

  private blur(): void {
    const activeElelment = document.activeElement as HTMLElement;
    if (activeElelment !== null) {
      activeElelment.blur();
    }
  }
}
