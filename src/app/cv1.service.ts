import { Injectable } from '@angular/core';
import {CV1} from "./mocks/cv1";
import {cv1} from "./models/cv1";
import { Http, Headers } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import {backend} from './config'
@Injectable()
export class CV1Service {
  cv: cv1[];


  constructor(private http: Http) {
    this.cv = CV1;
  }

  /*getCVData(){
   return this.cv;
   }*/

  getCVData(username) {
    return this.http
      .post(backend + 'getCV1', {username: username})
      .map(res => res.json())
      .map(res => {
        if (res == null)
          return JSON.stringify({})
        return res;
      });
  }

  postCVData(cvdata) {
    return this.http
      .post(backend + 'CV1', cvdata).map(res => res.json())
      .map((res) => {
        return res;
      });
  };

  getlistofcvs() {
    return this.http
      .get(backend + 'allcvs').map(res => {
        return res.json()
      });
  }
}


