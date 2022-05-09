export class Sede
{
  id: number;
  direccion: string;
  nombre: string;
  ciudad :string;
  imagen: string;
  constructor(
    id: number,
    direccion: string,
    nombre: string,
    ciudad :string,
    imagen : string)
  {
    this.id = id;
    this.direccion=direccion;
    this.nombre= nombre;
    this.ciudad=ciudad;
    this.imagen = imagen;
  }
}
