import { Component, OnInit } from '@angular/core';
import {PostJobService} from "../post-job.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-selectedcvs',
  templateUrl: './selectedcvs.component.html',
  styleUrls: ['./selectedcvs.component.css']
})
export class SelectedcvsComponent implements OnInit {
  selectedcvs:any;
  jobid:string;
  constructor(private jobservice:PostJobService,private route:ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.jobid=params["jobid"];
      this.jobservice.allselectedcandidate(this.jobid).subscribe(res => {
        this.selectedcvs=res.json();
      });
    })

  }

  ngOnInit() {
  }

}
