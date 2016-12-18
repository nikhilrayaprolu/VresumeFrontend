import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from "rxjs";
@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
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


  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
