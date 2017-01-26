import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-facebookcallback',
  templateUrl: './facebookcallback.component.html',
  styleUrls: ['./facebookcallback.component.css']
})
export class FacebookcallbackComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http) {

    this.route.queryParams
      .subscribe(params=>{
      console.log(params['code']);
      this.http.post('http://localhost:8081/auth/google',{code:params['code']}).subscribe((res)=>console.log(res));
      })
  }
  ngOnInit() {
  }

}
