
export class Servicio {
  id : number;
  nombre: string;
  descripcion: string;
  costo: number;
  restriccion: string;
  disponibilidad: boolean;

  constructor(id : number, nombre: string, descripcion: string, costo: number, restriccion: string, disponibilidad: boolean){
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.costo = costo;
    this.restriccion = restriccion;
    this.disponibilidad=disponibilidad;
  }
}
