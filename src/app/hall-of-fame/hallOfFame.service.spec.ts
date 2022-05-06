/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HallOfFameService } from './hallOfFame.service';

describe('Service: HallOfFame', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallOfFameService]
    });
  });

  it('should ...', inject([HallOfFameService], (service: HallOfFameService) => {
    expect(service).toBeTruthy();
  }));
});
