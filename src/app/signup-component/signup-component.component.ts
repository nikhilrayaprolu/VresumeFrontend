import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {User} from "../models/user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

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
    this.UserService.register({username:this.username,password:this.password,FirstName:this.FirstName,LastName:this.LastName,email:this.email,
      phone:this.phone, dob:this.dob,
      userType:"jobSeeker"}).subscribe((result) => {
      if (result) {
        console.log(result)
        if(result.success){
          this.router.navigate(['/cv']);
        }
      }
    });
  }
  constructor(private UserService: UserService,private router:Router) { }

  ngOnInit() {
  }

}
