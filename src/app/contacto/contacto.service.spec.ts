/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactoService } from './contacto.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('Service: Contacto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactoService],
      imports:[HttpClientTestingModule]

    });
  });

  it('should ...', inject([ContactoService], (service: ContactoService) => {
    expect(service).toBeTruthy();
  }));
});
