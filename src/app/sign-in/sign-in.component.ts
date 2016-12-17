import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {SignupService} from "../signup.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username='';
  password='';

  usernamefinal:User[];
  submit(){

    this.usernamefinal=this.signupService.getUserData().filter((elem,i,array)=>{
      return elem.id==1;

    });
    console.log(this.usernamefinal);
  }
  constructor(private signupService: SignupService) { }
  ngOnInit() {
  }

}
