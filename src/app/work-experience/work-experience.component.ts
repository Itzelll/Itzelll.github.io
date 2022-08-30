import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha : "2020-2022",
      ubicacion : "Orizaba, Ver",
      puesto : "CEO",
      empresa : "Waves"
    };

    let work2 = {
      fecha : "2017-2020",
      ubicacion : "Ixtac, Ver",
      puesto : "CEO",
      empresa : "Kubeet"
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);

  }

}
