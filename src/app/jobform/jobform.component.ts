import { Component, OnInit } from '@angular/core';
import {PostJobService} from "../post-job.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css']
})
export class JobformComponent implements OnInit {
  jobid:string;
  username$:Observable<string>
  jobapplication={};
  constructor(private jobservice:PostJobService,private route:ActivatedRoute,private store: Store<fromRoot.State>,private router:Router) {
    this.username$=store.select(fromRoot.getUserName);
    this.jobapplication['userid']=this.username$;
    this.jobapplication['jobid']=this.jobid;
  }
  applyjob(){
    this.jobservice.applyjob(this.jobapplication).subscribe(res => {
      console.log(res);

    });

  }
  ngOnInit() {
  }

}
