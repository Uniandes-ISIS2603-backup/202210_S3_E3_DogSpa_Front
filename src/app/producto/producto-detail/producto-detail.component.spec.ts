  /* tslint:disable:no-unused-variable */
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';
  import { faker } from '@faker-js/faker';

  import { ProductoDetailComponent } from './producto-detail.component';
import { Producto } from '../producto';



  describe('ProductoDetailComponent', () => {
    let component: ProductoDetailComponent;
    let fixture: ComponentFixture<ProductoDetailComponent>;
    let debug: DebugElement

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ProductoDetailComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ProductoDetailComponent);
      component = fixture.componentInstance;
      component.productoDetails= new Producto(


        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),



      )




      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
