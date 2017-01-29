import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {PostJobService} from "../post-job.service";

@Component({
  selector: 'app-appliedcvs',
  templateUrl: './appliedcvs.component.html',
  styleUrls: ['./appliedcvs.component.css']
})
export class AppliedcvsComponent implements OnInit {
  private jobid:any;
  private appliedcandidates:any;

  constructor(private jobservice:PostJobService,private route:ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.jobid=params["jobid"];
      this.jobservice.allappliedjobsbyjobs(this.jobid).subscribe(res => {
        this.appliedcandidates=res.json();
      })
    })
  }

  ngOnInit() {
  }

}
