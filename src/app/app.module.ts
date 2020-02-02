import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule}from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig}from '@ng-bootstrap/ng-bootstrap';
import {ChangecoureComponent}from './changecoure/changecoure.component';
import {AllcoursesComponent}from './allcourses/allcourses.component';
import {CreatecourseComponent }from './createcourse/createcourse.component';

import { AppRoutingModule } from './app-routing.module';
import { SecuredHttpInterceptor } from './core/interceptor/secured-http.interceptor';
import { AuthGuardService } from "./core/guard/auth-guard.service";
import { KeycloakService } from "./core/auth/keycloak.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecuredComponent } from './secured/secured.component';
import {ContactComponent}from './contact/contact.component';
import {UserprofileComponent}from './userprofile/userprofile.component';
import {ExampleofcoursesComponent}from './exampleofcourses/exampleofcourses.component';
import {EndofcourseComponent}from './endofcourse/endofcourse.component';
import {StartofcourseComponent }from './startofcourse/startofcourse.component';

@NgModule( {
declarations: [
AppComponent,
HomeComponent,
SecuredComponent,
AllcoursesComponent,
ChangecoureComponent,
CreatecourseComponent,
ContactComponent,
UserprofileComponent,
ExampleofcoursesComponent,
EndofcourseComponent,
StartofcourseComponent
],
imports: [
BrowserModule,
FormsModule,
NgbModule,
RouterModule,
HttpClientModule,
AppRoutingModule
],
providers: [
KeycloakService,
AuthGuardService,
{
provide: HTTP_INTERCEPTORS,
useClass: SecuredHttpInterceptor,
multi: true
},
NgbCarouselConfig,
],
bootstrap: [AppComponent]
} )
export class AppModule { }
