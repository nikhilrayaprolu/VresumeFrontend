import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VResume';
  username=localStorage.getItem('username');
  signout(){
    this.userservice.logout();
  }
  constructor(private userservice :UserService){

  }
}
