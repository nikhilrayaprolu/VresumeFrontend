import { Injectable } from '@angular/core';
import {USER} from "./mocks/user";
@Injectable()
export class SignupService {
  getUserData(){
    return USER;
  }
  constructor() { }

}
