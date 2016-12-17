import { Injectable } from '@angular/core';
import {Employer} from "./models/employer";
import {EMPLOYER} from "./mocks/employer";

@Injectable()
export class EmployerService {
  emp:Employer[];
  getEmployerData(){
    return this.emp;
  }
  constructor() {
    this.emp=EMPLOYER;
  }

}
