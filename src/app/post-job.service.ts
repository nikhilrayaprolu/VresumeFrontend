import { Injectable } from '@angular/core';
import {JobPost} from "./models/jobPost";
import {JOBPOST} from "./mocks/jobPost";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {backend} from "./config";

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
        backend+'postjob',
        jobdata).map(res => res.json()).map(res => {

        if(res.success){
          console.log(res)
        }
        return res.success;

      })

  }
  getAllJobs(){
    return this.http
      .get(
        backend+'getjobs')
      .map(res => res.json()).map(res => {

        if(res.success){
          console.log(res)
        }
        return res;

      })

  }
  getjob(jobid){
    return this.http
      .post(backend+'getjob',{jobid:jobid}).map(res => {
        return res.json();
      })
  }
  applyjob(applicationdata){
    return this.http
      .post(backend+'applyjob',applicationdata).map(res => {
        return res.json();
      })
  }
  allappliedjobsbyjobs(jobid){
    return this.http
      .post(backend+'appliedjobs',{jobid:jobid}).map(res =>{
        return res.json()
      })
  }
  allappliedjobsbyuser(userid){
    return this.http
      .post(backend+'appliedjobs',{userid:userid}).map(res => {
        return res.json()
      })

  }
  allselectedcandidate(jobid){
    return this.http
      .post(backend+'getcandidates',{jobid:jobid}).map(res => {
        return res.json()
      })

  }
}
