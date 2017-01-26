import { Component, OnInit } from '@angular/core';
import {VisualCvService} from "../visual-cv.service";
import {cv1} from "../models/cv1";
import {User} from "../models/user";


@Component({
  selector: 'app-visual-cv',
  templateUrl: './visual-cv.component.html',
  styleUrls: ['./visual-cv.component.css']
})
export class VisualCvComponent implements OnInit {
  cv:cv1;
  user:User;
  getNumber(N){
    return Array.apply(null, {length: N}).map(Number.call, Number);
  };
  constructor(private VisualCvService: VisualCvService){

  }


  ngOnInit() {
    this.VisualCvService.getCV1Data().subscribe(res=>{
      this.cv=res;
    });
    this.VisualCvService.getUserData().subscribe(res=>{
      this.user=res;
    });

  }

}
