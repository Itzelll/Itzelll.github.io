import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {

  inteR : Array<any> = []

  constructor() { }

  ngOnInit(): void {

    let inte1 = {
      interes : "Pintar",
    };

    let inte2 = {
      interes : "Música",
    };

    let inte3 = {
      interes : "Animacion",
    };

    let inte4 = {
      interes : "Pasar tiempo conmigo misma",
    };

    let inte5 = {
      interes : "Leer novelas ligeras",
    };

    let inte6 = {
      interes : "Videojuegos",
    };

    this.inteR.push(inte1);
    this.inteR.push(inte2);
    this.inteR.push(inte3);
    this.inteR.push(inte4);
    this.inteR.push(inte5);
    this.inteR.push(inte6);

  }

}
