import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {SignupService} from "../signup.service";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username='raj1';
  password='';

  usernamefinal:User[];
  constructor(private userService: UserService, private router: Router) {}

  submit() {
    this.userService.login(this.username, this.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }
  ngOnInit() {
  }

}
export class LoginComponent {

}
