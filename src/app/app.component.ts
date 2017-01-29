import { Component } from '@angular/core';
import {UserService} from "./user.service";
import {Store} from '@ngrx/store';
import {State} from './reducers/index';
import {Observable} from "rxjs";
import * as fromRoot from './reducers';
import * as user from './actions/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VResume';
  username$:Observable<string>
  signout(){
    this.userservice.logout();
  }
  constructor(private userservice :UserService,private store: Store<fromRoot.State>){
    store.dispatch(new user.UserAction(localStorage.getItem('username')));
    this.username$=store.select(fromRoot.getUserName);

  }
}
