/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PackDeServiciosListComponent } from './pack-de-servicios-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PackDeServiciosService } from '../pack-de-servicios.service';
import { Servicio } from 'src/app/servicio/servicio';
import { PackDeServiciosDetail } from '../pack-de-servicios-detail';

describe('PackDeServiciosListComponent', () => {
  let component: PackDeServiciosListComponent;
  let fixture: ComponentFixture<PackDeServiciosListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ PackDeServiciosListComponent ],
      providers: [PackDeServiciosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackDeServiciosListComponent);
    component = fixture.componentInstance;

    let servicio1 = new Servicio(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.boolean(),
      faker.datatype.string(),
    );

    let servicio2 = new Servicio(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.boolean(),
      faker.datatype.string(),
    );

    let servicio3 = new Servicio(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.boolean(),
      faker.datatype.string(),
    );

    component.packs = [
      new PackDeServiciosDetail(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.string(),
        [servicio1, servicio2, servicio3],
        [],
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toBe(
      component.packs[0].nombre
      );
  });

});
