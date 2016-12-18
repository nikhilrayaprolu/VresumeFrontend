import {Component, Directive} from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


// const URL = '/api/';
const URL = 'http://localhost:8081/uploadphotos';
// class FileSelectDirective

@Component({
  selector: 'app-cv2',
  templateUrl: './cv2.component.html',
  styleUrls: ['./cv2.component.css']
})
export class CV2Component {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
