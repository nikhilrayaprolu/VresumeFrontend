import { Injectable } from '@angular/core';
import {CV1} from "./mocks/cv1";
import {cv1} from "./models/cv1";
@Injectable()
export class CV1Service {
  cv:cv1[];
  getCVData(){
    return this.cv;
  }
  constructor() {
    this.cv=CV1;
  }

}
