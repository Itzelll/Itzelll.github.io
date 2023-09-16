import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificate : Array<any> = []

  constructor() { }

  ngOnInit(): void {

    let const1 = {
      fecha : "(2022)",
      titulo : "Project Management Professional",
      descripcion : " Siglas (PMP)",
    };

    let const2 = {
      fecha : "(2021)",
      titulo : "Especialista en Java",
    };

    let const3 = {
      fecha : "(2020)",
      titulo : "Especialista en diseño de base de datos",
    };

    let const4 = {
      fecha : "(2019)",
      titulo : "Asociado Certificado en Lenguaje de Programación C",
      descripcion : "Siglas (CLA)",
    };

    let const5 = {
      fecha : "(2023)",
      titulo : "Especialista en Python", 
      descripcion : "Python",
      link : "https://github.com/Itzelll/python/blob/master/cursos-python/Itzel%20M%C3%A9ndezM%20-%20Python.png",
    };

    let const6 = {
      fecha : "(2023)",
      titulo : "Especialista en Pandas", 
      descripcion : "Pandas",
      link: "https://github.com/Itzelll/python/blob/master/cursos-pandas/Itzel%20M%C3%A9ndezM%20-%20Pandas.png"
    };

    let const7 = {
      fecha : "(2023)",
      titulo : "Introducción a la Ciencia de Datos",
      descripcion : "Intro to Machine Learning",
      link : "https://github.com/Itzelll/python/blob/master/cursos-introML/Itzel%20M%C3%A9ndezM%20-%20Intro%20to%20Machine%20Learning.png"
    };

    let const8 = {
      fecha : "(2023)",
      titulo : "Ciencia de Datos Intermedia",
      descripcion : "Intermediate Machine Learning",
      link : "https://github.com/Itzelll/python/blob/master/cursos-IML/Itzel%20M%C3%A9ndezM%20-%20Intermediate%20Machine%20Learning.png"
    };

    this.certificate.push(const8);
    this.certificate.push(const7);
    this.certificate.push(const6);
    this.certificate.push(const5);
    this.certificate.push(const1);
    this.certificate.push(const2);
    this.certificate.push(const3);
    this.certificate.push(const4);

  }
  
}
