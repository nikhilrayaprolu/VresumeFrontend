import { Component, OnInit } from '@angular/core';
import {PostJobService} from "../post-job.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers';
@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {
  jobid:string;
  jobdata:any;
  username$:Observable<string>
  constructor(private jobservice:PostJobService,private route:ActivatedRoute,private store: Store<fromRoot.State>,private router:Router) {
    this.username$=store.select(fromRoot.getUserName);
    this.route.params.subscribe(params => {
      this.jobid=params['jobid'];
      this.jobservice.getjob(params['jobid']).subscribe(res => {
        console.log(res);
        this.jobdata=res;
      });
    })
  }
  applyjob(){
    this.router.navigate(['/jobform',this.jobid]);
    }


  ngOnInit() {

  }

}
