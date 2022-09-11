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

    this.certificate.push(const1);
    this.certificate.push(const2);
    this.certificate.push(const3);
    this.certificate.push(const4);

  }

}
