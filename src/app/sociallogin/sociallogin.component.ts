import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-sociallogin',
  templateUrl: './sociallogin.component.html',
  styleUrls: ['./sociallogin.component.css']
})
export class SocialloginComponent implements OnInit {
  facebooklogin(){
    this.http.get('https://www.facebook.com/dialog/oauth?client_id=1756138584660350&redirect_uri=http://localhost:4200/auth/facebook/callback').subscribe(res=>console.log(res))
  }
  constructor(private http:Http) { }

  ngOnInit() {
  }

}
