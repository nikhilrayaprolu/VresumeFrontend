import { Injectable } from '@angular/core';
import {USER} from "./mocks/user";
import {CV1} from "./mocks/cv1";
import {cv1} from "./models/cv1";
import {User} from "./models/user";

@Injectable()
export class VisualCvService {
  cv:cv1;
  user:User;
  getCVData(){
    return this.cv;
  }
  getUserData(){
    return this.user
  }
  constructor() {
    this.cv=CV1[0];
    this.user=USER[0];
  }

}
