import { Component, OnInit } from '@angular/core';
import {PostJobComponent} from "../post-job/post-job.component";

import {Router} from "@angular/router";
import {PostJobService} from "../post-job.service";

@Component({
  selector: 'app-showjobs',
  templateUrl: './showjobs.component.html',
  styleUrls: ['./showjobs.component.css']
})
export class ShowjobsComponent implements OnInit {
  jobs:any;
  constructor(private postjobservice:PostJobService,private route:Router) {
    this.postjobservice.getAllJobs().subscribe(res=>{
      console.log(res);
      this.jobs=res;
    })
  }
  ngOnInit() {
  }
  applyjob(){

  }
  viewjob(jobid){
    this.route.navigate(['/viewjob',jobid]);
  }

}
