import { PackDeServicios } from "./packDeServicios";
import { Servicio } from "../servicio/servicio";
import { Sede } from "../sede/sede";
//import { Perro } from "../perro/perro";

export class PackDeServiciosDetail extends PackDeServicios {

    servicios: Array<Servicio> = [];
    sedes: Array<Sede> = [];
    //perros: Array<Perro> = [];

    constructor(nombre: string, costo: number, descuento: number, descripcion: string, servicios: Array<Servicio>, sedes: Array<Sede>) {
        super(nombre, costo, descuento, descripcion);
        this.servicios = servicios;
        this.sedes = sedes;
    }

}
