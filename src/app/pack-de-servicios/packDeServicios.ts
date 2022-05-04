import { Servicio } from "../servicio/servicio";

export class PackDeServicios {
  nombre: string;
  costo: number;
  descuento: number;
  descripcion: string;

  constructor(nombre: string, costo: number, descuento: number, descripcion: string) {
    this.nombre = nombre;
    this.costo = costo;
    this.descuento = descuento;
    this.descripcion = descripcion;
  }

}
