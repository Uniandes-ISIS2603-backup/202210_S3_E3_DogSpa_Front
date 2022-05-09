/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackDeServiciosDetailComponent } from './pack-de-servicios-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Servicio } from 'src/app/servicio/servicio';
import faker from '@faker-js/faker';
import { PackDeServiciosDetail } from '../pack-de-servicios-detail';

describe('PackDeServiciosDetailComponent', () => {
  let component: PackDeServiciosDetailComponent;
  let fixture: ComponentFixture<PackDeServiciosDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ PackDeServiciosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackDeServiciosDetailComponent);
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

    component.packDetail = new PackDeServiciosDetail(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.string(),
      [servicio1, servicio2, servicio3],
      [],
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.packDetail.nombre
    );
  });

});
