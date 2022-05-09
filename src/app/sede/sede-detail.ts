import { Sede } from "./sede";


export class SedeDetail extends Sede{
  constructor (id: number,
    direccion: string,
    nombre: string,
    ciudad :string,
    imagen : string){
    super(id, direccion,nombre,ciudad,imagen);
  }
}
