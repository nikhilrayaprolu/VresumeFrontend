import { Injectable } from '@angular/core';
import {JobPost} from "./models/jobPost";
import {JOBPOST} from "./mocks/jobPost";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PostJobService {


  job:JobPost[];
  getJobData(){
    return this.job;
  }
  constructor(private http:Http) {
    this.job=JOBPOST;
  }
  postJobData(jobdata){
    return this.http
      .post(
        'http://localhost:8081/postjob',
        jobdata).map(res => res.json()).map(res => {

            if(res.success){
              console.log(res)
            }
            return res.success;

      })

  }


}
