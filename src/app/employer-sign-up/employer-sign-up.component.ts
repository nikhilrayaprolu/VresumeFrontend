import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-employer-sign-up',
  templateUrl: './employer-sign-up.component.html',
  styleUrls: ['./employer-sign-up.component.css']
})
export class EmployerSignUpComponent implements OnInit {

  username='';
  password='';
  FirstName='';
  LastName='';
  email='';
  phone='';
  dob='';

  usernamefinal:User[];
  submit(){
    this.UserService.register({username:this.username,password:this.password,FirstName:this.FirstName,LastName:this.LastName,email:this.email,
      phone:this.phone, dob:this.dob,
    userType:"employer"}).subscribe((result) => {
      if (result) {
        console.log(result)
      }
    });
  }
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

}
