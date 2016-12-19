import { Component, OnInit } from '@angular/core';
import {CV1Service} from "../cv1.service";
import {cv1} from "../models/cv1";

@Component({
  selector: 'app-cv1',
  templateUrl: './cv1.component.html',
  styleUrls: ['./cv1.component.css']
})
export class CV1Component implements OnInit {
username=''
  location='';
  wexp='';
  profileDesc='';
  keySkills='';
  industry='';
  functional_area='';
  noOfEducations=1;
  arr=[];
  fullName='';
  mobileNumber='';
  cvfilled:cv1[];
  incrementeducation(){
  this.noOfEducations+=1;
}
  getNumber(N){
  return Array.apply(null, {length: N}).map(Number.call, Number);
};


  submit(){

    this.CV1Service.postCVData({
      FullName:this.fullName,
      MobileNumber:this.mobileNumber,
      userid:this.username,
      Location:this.location,
      WorkExperience:this.wexp,
      ProfileDescription:this.profileDesc,
      Keyskills:this.keySkills,
      Industry:this.industry,
      FunctionalArea:this.functional_area,

      EducationBackGround:this.arr,

    }).subscribe(res=>
    console.log(res))
    console.log(this.cvfilled);
  }
  constructor(private CV1Service: CV1Service) { }

  ngOnInit() {
  }

}
