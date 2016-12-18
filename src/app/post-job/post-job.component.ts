import { Component, OnInit } from '@angular/core';
import {JobPost} from "../models/jobPost";
import {PostJobService} from "../post-job.service";

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  jobTitle='';
  jobDescription='';
  industry='';
  noOfResp=1;
  resp=[];
  vac=null;
  timing='';
  salary='';
  perks='';
  noOfSkills=1;
  skill=[];
  noOfEducations=1;
  degree=[];
  incrementeducation() {
    this.noOfEducations += 1;
  }
  incrementresp() {
    this.noOfResp += 1;
  }
  incrementskills() {
    this.noOfSkills += 1;
  }
  getNumber(N){
    return Array.apply(null, {length: N}).map(Number.call, Number);
  };
  jobpost:JobPost[];

  submit(){

    this.jobpost=this.PostJobService.getJobData().filter((elem,i,array)=>{
      return elem.id==1;

    });
    console.log(this.jobpost);
  }
  constructor(private PostJobService: PostJobService) { }

  ngOnInit() {
  }

}
