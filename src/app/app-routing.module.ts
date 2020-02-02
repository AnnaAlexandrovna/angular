import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionGuard } from './core/model/permission-guard';
import { AuthGuardService as AuthGuard } from './core/guard/auth-guard.service';
import { HomeComponent } from './home/home.component';
import {FormsModule}from '@angular/forms';
import { SecuredComponent } from './secured/secured.component';
import {AllcoursesComponent}from './allcourses/allcourses.component';
import {ChangecoureComponent}from './changecoure/changecoure.component';
import {CreatecourseComponent }from './createcourse/createcourse.component';
import {ContactComponent}from './contact/contact.component';
import {UserprofileComponent}from './userprofile/userprofile.component';
import {ExampleofcoursesComponent}from './exampleofcourses/exampleofcourses.component';
import {EndofcourseComponent}from './endofcourse/endofcourse.component';
import {StartofcourseComponent }from './startofcourse/startofcourse.component';

export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'allcourse', component: AllcoursesComponent },
{ path: 'changecourse', component: ChangecoureComponent },
{path: 'createcourse', component: CreatecourseComponent},
{path: 'contact', component: ContactComponent},
{path: 'userprofile', component: UserprofileComponent},
{path: 'excourse', component: ExampleofcoursesComponent},
{path: 'startcourse', component: StartofcourseComponent },
{path: 'endcourse', component: EndofcourseComponent},
{path: '', component: HomeComponent},
{ path: 'secured', canActivate: [AuthGuard], component: SecuredComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
