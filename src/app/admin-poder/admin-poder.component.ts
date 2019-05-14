import { Component, OnInit } from '@angular/core';
import { Poder } from 'src/models/Poder';

@Component({
  selector: 'app-admin-poder',
  templateUrl: './admin-poder.component.html',
  styleUrls: ['./admin-poder.component.css']
})
export class AdminPoderComponent implements OnInit {

//  lPoder : Poder[] = [];
textopoder = ' ';
  constructor() { }

  ngOnInit() {
    //let poderes = JSON.parse(localStorage.getItem("poder"));
    //console.log(poderes);
  }

  GuardarPoder(nombre : any)
  {

   // this.lPoder.push(new Poder(nombre));
    //console.log(this.lPoder);
    let poderes = [];
    let jsondata = localStorage.getItem("poder");
    if(jsondata)
    {
      poderes = JSON.parse(jsondata);
    }   
    poderes.push(new Poder(nombre));
    this.GrabarLocalStorage(poderes);
  }

  GrabarLocalStorage(poderes : any){
    
    //this.lPoder.push(poderes);

    //poderes.push(new Poder(nombre));
     // console.log(this.lPoder);
    localStorage.setItem("poder",  JSON.stringify(poderes));
    this.textopoder = ' ';
  }


}
