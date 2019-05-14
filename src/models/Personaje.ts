import { Poder } from './Poder';

export class Personaje
{
    id:number;
    nombre:string;
    poderes:Poder []= [];

    constructor(nombre,poderes)
    {
        this.nombre = nombre;
        this.poderes = poderes;
    }
}