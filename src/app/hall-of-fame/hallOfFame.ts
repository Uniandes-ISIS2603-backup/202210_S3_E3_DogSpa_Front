export class HallOfFame {
  id: number;
  prestador: string;
  servicio: string;
  imagen: string;
  //imagenes1: string[];

  constructor(id: number, prestador: string, servicio: string, imagen: string) {
    this.id = id;
    this.prestador = prestador;
    this.servicio = servicio;
    this.imagen = imagen;
    //this.imagenes1 = this.imagen.split(",");
  }
}
