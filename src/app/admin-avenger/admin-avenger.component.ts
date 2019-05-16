import { Personaje } from './../../models/Personaje';
import { Component, OnInit } from '@angular/core';
import { Poder } from 'src/models/Poder';

@Component({
  selector: 'app-admin-avenger',
  templateUrl: './admin-avenger.component.html',
  styleUrls: ['./admin-avenger.component.css']
})
export class AdminAvengerComponent implements OnInit {

  lPoder: Poder[] = [];
  Vengador: Personaje;

  constructor() {

    //this.ObtenerLocalStorage();

  }

  ngOnInit() {
    this.ObtenerLocalStorage();
    // this.lPoder.push(new Poder("Volar"));
    //this.lPoder.push(new Poder("Fuerza"));
    //console.log(this.lPoder);
  }

  ObtenerLocalStorage() {
    this.lPoder = JSON.parse(localStorage.getItem("poder"));
    // if (poderes != null) {
    //   poderes.forEach((x) => {
    //     //console.log(x);
    //     this.lPoder.push(new Poder(x.nombre));
    //   });
    // }
  }


  GuardarVengador(nombre: any) {
    this.Vengador = new Personaje(nombre, this.lPoder);
    console.log(this.Vengador);
  }

  selectchange($event) {
    console.log($event, $event.target, $event.currentTarget);
  }
}
