import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import {SignupService} from "./signup.service";

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponentComponent },


];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
