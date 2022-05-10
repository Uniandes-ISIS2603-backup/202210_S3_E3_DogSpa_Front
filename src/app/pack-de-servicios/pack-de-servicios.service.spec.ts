/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PackDeServiciosService } from './pack-de-servicios.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: PackDeServicios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PackDeServiciosService]
    });
  });

  it('should ...', inject([PackDeServiciosService], (service: PackDeServiciosService) => {
    expect(service).toBeTruthy();
  }));
});

