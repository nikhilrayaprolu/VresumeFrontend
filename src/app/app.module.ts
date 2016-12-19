import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import {SignupService} from "./signup.service";
import { SignInComponent } from './sign-in/sign-in.component';
import { CV1Component } from './cv1/cv1.component';
import {CV1Service} from "./cv1.service";
import { CV2Component } from './cv2/cv2.component';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { EmployerComponent } from './employer/employer.component';
import {EmployerService} from "./employer.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UserService} from "./user.service";
import { PostJobComponent } from './post-job/post-job.component';
import {PostJobService} from "./post-job.service";
<<<<<<< HEAD
import { EmployerSignUpComponent } from './employer-sign-up/employer-sign-up.component';
=======
import { VisualCvComponent } from './visual-cv/visual-cv.component';
import {VisualCvService} from "./visual-cv.service";
import { VideoUploadComponent } from './video-upload/video-upload.component';
>>>>>>> e2fb3589e28338acd1000ece74d752310dfdb498

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponentComponent },
  { path: 'signin', component: SignInComponent},
  { path: 'cv', component: CV1Component},
  { path: 'cv2', component: CV2Component},
  { path: 'employer', component: EmployerComponent},
  { path: 'job', component: PostJobComponent},
  { path: 'viewcv', component: VisualCvComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponentComponent,
    SignInComponent,
    CV1Component,
    CV2Component,
    FileSelectDirective, FileDropDirective,
    EmployerComponent,
    PostJobComponent,
<<<<<<< HEAD
    EmployerSignUpComponent
=======
    VisualCvComponent,
    VideoUploadComponent
>>>>>>> e2fb3589e28338acd1000ece74d752310dfdb498
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SignupService,
    CV1Service,
    EmployerService,
    UserService,
    PostJobService,
    VisualCvService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
