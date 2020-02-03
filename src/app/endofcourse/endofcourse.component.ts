import { Component, OnInit } from '@angular/core';
import { COURSE } from '../mock-course';
import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { KeycloakService } from "../core/auth/keycloak.service";
import { environment } from './../../environments/environment';

@Component({
selector: 'app-endofcourse',
templateUrl: './endofcourse.component.html',
styleUrls: ['./endofcourse.component.css']
})
export class EndofcourseComponent implements OnInit {


constructor(private http: HttpClient) {  }

  ngOnInit() {
    }

    getKeycloakService() {
        return KeycloakService
    }

    stringify( val ) {
        return JSON.stringify( val );
    }


  course = COURSE;

}
