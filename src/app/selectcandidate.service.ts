import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Store} from "@ngrx/store";
import * as fromRoot from './reducers';
import {backend} from "./config";
import { Observable } from "rxjs/Observable";
@Injectable()
export class SelectcandidateService {

  constructor(private http: Http ,private store:Store<fromRoot.State>) { }
  selectcandidate(jobid,userid){
      return this.http
        .post(
          backend+'selectcandidate',
          {
            jobid:jobid,
            userid:userid
          }
        )
        .map(res => res.json())
        .map((res) => {
          console.log(res);

        });
    }
    getcandidates(jobid){
    return this.http
      .get(backend+'getcandidates',jobid).map(res=>{
        console.log(res.json);
      })
    }
    removecandidate(jobid,userid){
      return this.http
        .post(
          backend+'removecandidate',
          {
            jobid:jobid,
            userid:userid
          }
        )
        .map(res => res.json())
        .map((res) => {
          console.log(res);

        });
    }
  }

