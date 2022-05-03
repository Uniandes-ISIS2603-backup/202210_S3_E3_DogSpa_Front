import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto.component';
import { ProductoService } from '../producto.service';
import { Sede } from 'src/app/sede/sede.component';
import { SedeService } from 'src/app/sede/sede.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  productos: Array<Producto> =[];
  sedes: Array<Sede> =[];

  constructor(private productoService: ProductoService, private sedeService:SedeService) { }

  ngOnInit() {
    this.getProductos("peluche",2);
    this.getSedes();


  }



getProductos(categoria: string,idSede:number): void
  {
    this.productoService.getProductosenSede(idSede).subscribe((productos)=>
    {
      const resultado=productos.filter(producto=>producto.categoria === categoria );
      this.productos = resultado;
    });
  }

  getSedes():void

  {
    this.sedeService.getSedes().subscribe((sedes)=>
    {
      this.sedes =sedes;

    });

  }

}
