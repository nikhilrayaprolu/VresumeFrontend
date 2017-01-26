import { Injectable } from '@angular/core';
import {USER} from "./mocks/user";
import {CV1} from "./mocks/cv1";
import {cv1} from "./models/cv1";
import {User} from "./models/user";
import {CV1Service} from "./cv1.service";
import {UserService} from "./user.service";
import {CV2Service} from "./cv2.service";
import {Observable} from "rxjs";

@Injectable()
export class VisualCvService {
  cv:cv1;
  user:User;
  getCV1Data(){
    return this.cvservice.getCVData();
  }
  getUserData(){
    return this.userservice.getuserdata();
  }
/*  getCV2Data(){
    return this.cv2service.getcv2data();
  }*/
  constructor(private cvservice:CV1Service,private userservice:UserService,private cv2service:CV2Service) {
    this.cv=CV1[0];
    this.user=USER[0];
  }

}
