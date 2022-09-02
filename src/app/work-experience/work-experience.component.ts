import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {


  workExperience : Array<any> = []


  constructor() { }

  ngOnInit(): void {

    let work1 = {

      fecha : "2020 - 2022",
      ubicacion : "Orizaba, Ver",
      puesto : "PROJECT MANAJER",
      empresa : "Biotek",
      logros: [
        { descripcion: "Liderazgo"},
        { descripcion: "Planeacion"},
        { descripcion: "Compromiso"},
        { descripcion: "Disponibilidad"}
      ]
    };

    let work2 = {
      fecha : "2017 - 2020",
      ubicacion : "Veracruz, Ver",
      puesto : "DESARROLLADOR DE SOFTWARE",
      empresa : "Google",
      logros: [
        { descripcion: "Manejo de Bases de Datos"},
        { descripcion: "Manejo de lenguajes para backend y frontend"},
        { descripcion: "Lenguajes Java, Python, C#"},
        { descripcion: "Manejo de IDE´s como NetBeans, VSC, Eclipse"}
      ]
    };

    let work3 = {
      fecha : "2014 - 2017",
      ubicacion : "Paso del Macho, Ver",
      puesto : "TECNICO OFIMATICO",
      empresa : "Pemex",
      logros: [
        { descripcion: "Trabajo en equipo"},
        { descripcion: "Paqueteria M. Office"},
        { descripcion: "Manejo de S.O. Windows y Linux"}
      ]

    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);

    this.workExperience.push(work3);


  }

}
