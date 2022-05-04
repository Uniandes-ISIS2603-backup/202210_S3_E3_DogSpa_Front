export class Sede
{
  id: number;
  direccion: string;
  nombre: string;
  ciudad :string;
  constructor(
    id: number,
    direccion: string,
    nombre: string,
    ciudad :string)
  {
    this.id = id;
    this.direccion=direccion;
    this.nombre= nombre;
    this.ciudad=ciudad;
  }
}
