import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto.component';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  productos: Array<Producto> =[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();


  }



getProductos(): void
  {
    this.productoService.getProductos().subscribe((productos)=>
    {
      this.productos = productos;
    });
  }

}
