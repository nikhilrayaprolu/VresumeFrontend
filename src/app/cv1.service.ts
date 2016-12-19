import { Injectable } from '@angular/core';
import {CV1} from "./mocks/cv1";
import {cv1} from "./models/cv1";
import { Http, Headers } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
@Injectable()
export class CV1Service {
  cv:cv1[];
  username='nikhil1';
  constructor(private http: Http) {
    this.cv=CV1;
  }
  /*getCVData(){
    return this.cv;
  }*/

  getCVData(){
    return this.http
      .post('http://localhost:8081/getCV1',{username:this.username})
      .map(res=>res.json())
      .map(res=>{
        console.log(res);
        if(res==null)
          return {}
        return res;
      });
  }

  postCVData(cvdata){
    console.log(cvdata)
  return this.http
    .post('http://localhost:8081/CV1',cvdata).map(res=> res.json())
    .map((res)=>{
    console.log(res)
      return res;
      });
    };
  }


