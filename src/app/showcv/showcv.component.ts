import { Component, OnInit } from '@angular/core';
import {CV1Service} from "../cv1.service";
import {SelectcandidateService} from "../selectcandidate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-showcv',
  templateUrl: './showcv.component.html',
  styleUrls: ['./showcv.component.css']
})
export class ShowcvComponent implements OnInit {
  cvlists:any;
  jobid:number;
  constructor(private cv1service:CV1Service,private selectcandidateservice:SelectcandidateService,private route:Router) {
    this.cv1service.getlistofcvs().subscribe(data=>{
      console.log(data);
      this.cvlists=data;
    })
  }
  selectcv(userid){
    this.selectcandidateservice.selectcandidate(this.jobid,userid).subscribe(res=>{
      console.log(res);
    })
  }
  viewcv(userid){
    this.route.navigate(['/viewcv',userid]);
  }

  ngOnInit() {
  }

}
