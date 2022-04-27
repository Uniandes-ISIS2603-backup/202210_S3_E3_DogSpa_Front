import { SelfDecorator } from "@angular/core";
export class Producto
{
  id: number;
  nombre: string;
  descripcion: string;
  costo: number;
  disponibilidad: number;
  categoria: string;


  constructor
  (
    id: number,
    nombre: string,
    descripcion: string,
    costo: number,
    disponibilidad: number,
    categoria: string)
    {
      this.id = id;
      this.nombre= nombre;
      this.descripcion = descripcion;
      this.costo = costo;
      this.disponibilidad = disponibilidad;
      this.categoria = categoria;

    }





}
