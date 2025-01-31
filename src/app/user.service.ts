import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from "rxjs";
import {Location} from "@angular/common";
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as user from './actions/user';
@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http , private location:Location ,private store:Store<fromRoot.State>) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(username, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(
        'http://localhost:8081/api/authenticate',
        JSON.stringify({ username, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        console.log(res);
        if (res.success) {
          localStorage.setItem('auth_token', res.token);
          localStorage.setItem('username',res.username);
          this.store.dispatch(new user.UserAction(res.username));
          this.loggedIn = true;
        }

        return res.success;
      });
  }
  register(userdata){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'http://localhost:8081/api/signup',
        userdata,
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        console.log(res)
        if (res.success) {
          this.login(userdata.username,userdata.password).subscribe((result) => {
            if (result) {
              console.log("successfully loggedin")
            };
          });

          return res.success;
        }}
      );
  }
  getuserdata(userid){
    return this.http
      .post('http://localhost:8081/userdata',{username:userid})
      .map(res=>res.json())
      .map(res=>{
        console.log(res)

        return res;
      })
  }
  getusername(){
    return localStorage.getItem('username');
  }
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    this.store.dispatch(new user.UserAction(''));
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
