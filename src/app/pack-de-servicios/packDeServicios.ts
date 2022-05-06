import { Servicio } from "../servicio/servicio";

export class PackDeServicios {
  id: number
  nombre: string;
  costo: number;
  descuento: number;
  descripcion: string;
  imagen: string;

  constructor(id: number, nombre: string, costo: number, descuento: number, descripcion: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.costo = costo;
    this.descuento = descuento;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

}
