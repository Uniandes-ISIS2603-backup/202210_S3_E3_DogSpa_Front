import { Component, OnInit } from '@angular/core';

export class Sede
{
  id: number;
  direccion: string;
  nombre: string;
  ciudad :string;
  constructor(
    direccion: string,
    nombre: string,
    ciudad :string, id:number )
  {
    this.id = id;
    this.nombre= nombre;
    this.ciudad=ciudad;
    this.direccion=direccion;
  }
}



