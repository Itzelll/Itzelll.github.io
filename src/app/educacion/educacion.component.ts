import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  education : Array<any> = []

  constructor() { } 

  ngOnInit(): void {

    let edu1= {
      fecha : "2020 - 2022",
      lugar : "Orizaba, Ver",
      estudios : "INGENIERIA EN SOFTWARE",
      escuela : "Universidad Veracruzana",

    };

    let edu2 = {
      fecha : "2017 - 2020",
      lugar : "Paso del Macho, Ver",
      estudios : "TECNICO OFIMATICO",
      escuela : "CBTis",

    };

    let edu3 = {
      fecha : "2014 - 2017",
      lugar : "Paso del Macho, Ver",
      estudios : "INFORMATICA",
      escuela : "ESTI No.77",

    };

    this.education.push(edu1);
    this.education.push(edu2);
    this.education.push(edu3);

  }

}
