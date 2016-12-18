import { Injectable } from '@angular/core';
import {JobPost} from "./models/jobPost";
import {JOBPOST} from "./mocks/jobPost";

@Injectable()
export class PostJobService {


  job:JobPost[];
  getJobData(){
    return this.job;
  }
  constructor() {
    this.job=JOBPOST;
  }



}
