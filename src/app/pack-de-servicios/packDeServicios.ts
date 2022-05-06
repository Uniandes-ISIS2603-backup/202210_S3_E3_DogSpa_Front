import { Servicio } from "../servicio/servicio";

export class PackDeServicios {
  nombre: string;
  costo: number;
  descuento: number;
  descripcion: string;
  imagen: string;

  constructor(nombre: string, costo: number, descuento: number, descripcion: string, imagen: string) {
    this.nombre = nombre;
    this.costo = costo;
    this.descuento = descuento;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

}
