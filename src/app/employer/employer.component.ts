import { Component, OnInit } from '@angular/core';
import {EmployerService} from "../employer.service";
import {Employer} from "../models/employer";

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  id=''
  companyName='';
  location='';
  designation='';
  industry='';
  companyNumber='';
  mobileNumber='';
  employer:Employer[];

  submit(){

    this.employer=this.EmployerService.getEmployerData().filter((elem,i,array)=>{
      return elem.id==1;

    });
    console.log(this.employer);
  }
  constructor(private EmployerService: EmployerService) { }

  ngOnInit() {
  }

}
