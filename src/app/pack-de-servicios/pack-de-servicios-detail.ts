import { PackDeServicios } from "./packDeServicios";
import { Servicio } from "../servicio/servicio";
import { Sede } from "../sede/sede";
//import { Perro } from "../perro/perro";

export class PackDeServiciosDetail extends PackDeServicios {

    servicios: Array<Servicio> = [];
    sedes: Array<Sede> = [];
    //perros: Array<Perro> = [];

    constructor(id: number, nombre: string, costo: number, descuento: number, descripcion: string, imagen: string, servicios: Array<Servicio>, sedes: Array<Sede>) {
        super(id, nombre, costo, descuento, descripcion, imagen);
        this.servicios = servicios;
        this.sedes = sedes;
    }

}
