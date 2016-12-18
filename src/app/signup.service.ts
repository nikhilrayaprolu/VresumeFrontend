import { Injectable } from '@angular/core';
import {USER} from "./mocks/user";
import {User} from "./models/user";
@Injectable()
export class SignupService {
  user:User[];
  getUserData(){
    return this.user;
  }
  constructor() {
    this.user=USER;
  }


}
