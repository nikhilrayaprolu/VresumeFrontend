import { Component, OnInit } from '@angular/core';
import {CV1Service} from "../cv1.service";
import {cv1} from "../models/cv1";

@Component({
  selector: 'app-cv1',
  templateUrl: './cv1.component.html',
  styleUrls: ['./cv1.component.css']
})
export class CV1Component implements OnInit {
username=localStorage.getItem('username')
  Location='';
  wexp:number=null;
  ProfileDescription='';
  keySkills='';
  industry='';
  functional_area='';
  noOfEducations=1;
  arr=[];
  FullName='';
  MobileNumber='';
  cvfilled:cv1[];
  incrementeducation(){
  this.noOfEducations+=1;
}
  getNumber(N){
  return Array.apply(null, {length: N}).map(Number.call, Number);
};


  submit(){

    this.CV1Service.postCVData({
      FullName:this.FullName,
      MobileNumber:this.MobileNumber,
      username:this.username,
      Location:this.Location,
      WorkExperience:this.wexp,
      ProfileDescription:this.ProfileDescription,
      Keyskills:this.keySkills,
      Industry:this.industry,
      FunctionalArea:this.functional_area,

      EducationBackGround:this.arr,

    }).subscribe(res=>
    console.log(res))
    console.log(this.cvfilled);
  }
  constructor(private CV1Service: CV1Service) {


  }

  ngOnInit() {
    this.CV1Service.getCVData().subscribe(res=>{
      console.log(res);
      if(res!=JSON.stringify({})){
      console.log("camehere")

      this.FullName=res.FullName;
      this.MobileNumber=res.MobileNumber;
      this.username=res.username;
      this.Location=res.Location;
      this.wexp=res.WorkExperience;
      this.ProfileDescription=res.ProfileDescription;
      this.keySkills=res.keySkills
      this.industry=res.industry;
      this.functional_area=res.functional_area;

      this.arr=res.EducationBackGround
      }
    }

  )
  }

}
