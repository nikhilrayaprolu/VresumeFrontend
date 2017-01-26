import {Component, OnInit, ElementRef} from '@angular/core';
import {Http} from "@angular/http";
declare var $: any
declare var UploadVideo: any

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {
constructor(private http:Http){}
observer:any
signinCallback = function (result){
  if(result.access_token) {
    var uploadVideo = new UploadVideo();
    uploadVideo.ready(result.access_token);
  }
};
STATUS_POLLING_INTERVAL_MILLIS = 60 * 1000; // One minute.

  processcompleted(){
    console.log("vo hogaya")
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    var target = document.getElementById('video-id');

// create an observer instance
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        console.log(mutation.type);
        console.log(target.innerHTML);
        this.http.post('http://localhost:8081/postvideo',{username:this.username,videoid:target.innerHTML}).subscribe(res=>{
          console.log(res);
        })

      });
    });

// configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
    observer.observe(target, config);
  }
}
