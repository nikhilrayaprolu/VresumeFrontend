import { Component, OnInit } from '@angular/core';
import {JobPost} from "../models/jobPost";
import {PostJobService} from "../post-job.service";

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  jobTitle = '';
  jobDescription = '';
  industry = '';
  noOfResp = 1;
  resp = [];
  vac = null;
  timing = '';
  salary = '';
  perks = '';
  noOfSkills = 1;
  skill = [];
  noOfEducations = 1;
  degree = [];

  incrementeducation() {
    this.noOfEducations += 1;
  }

  incrementresp() {
    this.noOfResp += 1;
  }

  incrementskills() {
    this.noOfSkills += 1;
  }

  getNumber(N) {
    return Array.apply(null, {length: N}).map(Number.call, Number);
  };

  jobpost: JobPost[];

  constructor(private PostJobService: PostJobService) {
  }

  ngOnInit() {
  }

  submit() {

    this.PostJobService.postJobData({
      jobTitle: this.jobTitle,
      jobDescription: this.jobDescription,
      industry: this.industry,
      noOfResp: this.noOfResp,
      resp: this.resp,
      vac: this.vac,
      timing: this.timing,
      salary: this.salary,
      perks: this.perks,
      noOfSkills: this.noOfSkills,
      skill: this.skill,
      noOfEducations: this.noOfEducations,
      degree: this.degree,

    }).subscribe((result) => {
      if (result) {
        console.log(result)
      }

    })

  }
}
