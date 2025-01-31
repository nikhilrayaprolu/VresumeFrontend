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
import { EmployerSignUpComponent } from './employer-sign-up/employer-sign-up.component';
import { VisualCvComponent } from './visual-cv/visual-cv.component';
import {VisualCvService} from "./visual-cv.service";
import { VideoUploadComponent } from './video-upload/video-upload.component';
import {CV2Service} from "./cv2.service";
import { SocialloginComponent } from './sociallogin/sociallogin.component';
import { FacebookcallbackComponent } from './facebookcallback/facebookcallback.component';
import { StoreModule } from '@ngrx/store';
import {reducer} from "./reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { ShowcvComponent } from './showcv/showcv.component';
import { ShowjobsComponent } from './showjobs/showjobs.component';
import { ViewjobComponent } from './viewjob/viewjob.component';
import {CommonModule} from "@angular/common";
import { JobformComponent } from './jobform/jobform.component';
import { SelectedcvsComponent } from './selectedcvs/selectedcvs.component';
import { AppliedcvsComponent } from './appliedcvs/appliedcvs.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponentComponent },
  { path: 'signin', component: SignInComponent},
  { path: 'cv', component: CV1Component},
  { path: 'cv2', component: CV2Component},
  { path: 'employer', component: EmployerComponent},
  { path: 'job', component: PostJobComponent},
  { path: 'viewcv/:userid', component: VisualCvComponent},
  { path: 'uploadvideo', component: VideoUploadComponent},
  { path: 'sociallogin',component:SocialloginComponent},
  {path:'auth/facebook/callback/',component:FacebookcallbackComponent},
  { path: 'employersignup', component: EmployerSignUpComponent},
  {path:'showcvs', component: ShowcvComponent},
  {path:'showjobs',component:ShowjobsComponent},
  {path:'viewjob/:jobid',component:ViewjobComponent},
  {path:'jobform/:jobid',component:JobformComponent}
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
    EmployerSignUpComponent,
    VisualCvComponent,
    VideoUploadComponent,
    SocialloginComponent,
    FacebookcallbackComponent,
    ShowcvComponent,
    ShowjobsComponent,
    ViewjobComponent,
    JobformComponent,
    SelectedcvsComponent,
    AppliedcvsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    RouterModule.forRoot(appRoutes),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [
    SignupService,
    CV1Service,
    EmployerService,
    UserService,
    PostJobService,
    VisualCvService,
    CV2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
