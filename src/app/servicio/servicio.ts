
export class Servicio {
  id : number;
  nombre: string;
  descripcion: string;
  costo: number;
  restriccion: string;
  disponibilidad: boolean;
  imagen: string;

  constructor(id : number, nombre: string, descripcion: string, costo: number, restriccion: string, disponibilidad: boolean, imagen: string){
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.costo = costo;
    this.restriccion = restriccion;
    this.disponibilidad=disponibilidad;
    this.imagen = imagen;
  }
}
