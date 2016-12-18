import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {User} from "../models/user";

@Component({
  selector: 'app-root',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
  username='';
  password='';
  FirstName='';
  LastName='';
  email='';
  phone='';
  dob='';

  usernamefinal:User[];
  submit(){

    this.usernamefinal=this.signupService.getUserData().filter((elem,i,array)=>{
      return elem.id==2;

    });
    console.log(this.usernamefinal);
  }
  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

}
