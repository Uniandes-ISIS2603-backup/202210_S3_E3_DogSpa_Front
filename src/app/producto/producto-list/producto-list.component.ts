import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { SedeService } from 'src/app/sede/sede.service';
import { Sede } from 'src/app/sede/sede';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})


export class ProductoListComponent implements OnInit {
  productos: Array<Producto> =[];
  sedes: Array<Sede> =[];
  categoria: string="";
  sede: string='1';
  selected: boolean =false;
  selectProducto!:Producto;

  constructor(private productoService: ProductoService, private sedeService:SedeService) { }

  ngOnInit() {
    this.getProductos(this.categoria,this.sede);
    this.getSedes();


  }

  setCategoria(): void
  {
    let value = (<HTMLSelectElement>document.getElementById('categoria-select-producto')).value;
    this.categoria = value;
    console.log(this.categoria);
    this.selected =false;

    this.getProductos(this.categoria,this.sede);



  }

  setSede():void
  {
    let value = (<HTMLSelectElement> document.getElementById('sede-select-producto')).value;
    this.sede= value;
    console.log(this.sede) ;
    this.selected =false;
    this.getProductos(this.categoria,this.sede);


  }




getProductos(categoria: string,idSede:string): void
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

  onSelectedDet(producto: Producto):void
  {
    this.selected = true;
    this.selectProducto = producto;

  }


  notselect():void
  {
    this.selected = false;


  }

}
