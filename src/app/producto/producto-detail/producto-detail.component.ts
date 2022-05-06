import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
  @Input() productoDetails!: Producto;

  constructor() { }

  ngOnInit() {
  }

}
