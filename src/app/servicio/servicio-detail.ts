import { Servicio } from "./servicio";

export class ServicioDetail extends Servicio {

  constructor(id : number, nombre: string, descripcion: string, costo: number, restriccion: string, disponibilidad: boolean, imagen: string)
  {
    super(id, nombre, descripcion, costo, restriccion, disponibilidad, imagen)
  }
}
