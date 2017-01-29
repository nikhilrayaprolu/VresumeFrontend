import { Component, OnInit } from '@angular/core';
import {VisualCvService} from "../visual-cv.service";
import {cv1} from "../models/cv1";
import {User} from "../models/user";
import {Router, ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-visual-cv',
  templateUrl: './visual-cv.component.html',
  styleUrls: ['./visual-cv.component.css']
})
export class VisualCvComponent implements OnInit {
  cv:cv1;
  user:User;
  userid:string;
  getNumber(N){
    return Array.apply(null, {length: N}).map(Number.call, Number);
  };
  constructor(private VisualCvService: VisualCvService,private route:ActivatedRoute,private router:Router){
    this.route.params.subscribe((params:Params) => {
      this.userid=params['userid'];
      console.log(params);
    })
  }


  ngOnInit() {
    this.VisualCvService.getCV1Data(this.userid).subscribe(res=>{
      this.cv=res;
    });
    this.VisualCvService.getUserData(this.userid).subscribe(res=>{
      this.user=res;
    });

  }

}
