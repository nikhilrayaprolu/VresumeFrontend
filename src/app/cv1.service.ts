import { Injectable } from '@angular/core';
import {CV1} from "./mocks/cv1";
import {cv1} from "./models/cv1";
import { Http, Headers } from '@angular/http';
import {Observable} from "rxjs";
@Injectable()
export class CV1Service {
  cv:cv1[];
  username='';
  constructor(private http: Http) {
    this.cv=CV1;
  }
  /*getCVData(){
    return this.cv;
  }*/

  getCVData(){
    return this.http
      .post('http://localhost:8081/getCV1',this.username)
      .map(res=>res.json())
      .map(res=>{
        console.log(res);
        return res;
      });
  }

  postCVData(cvdata){
  return this.http
    .post('http://localhost:8081/CV1',cvdata).map(res=> res.json())
    .map((res)=>{
    console.log(res)
      return res;
      });
    };
  }


