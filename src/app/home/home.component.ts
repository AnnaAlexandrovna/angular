import { Component, OnInit } from '@angular/core';

import { COURSES } from '../mock-course';
import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';

import { KeycloakService } from "../core/auth/keycloak.service";
import { environment } from '../../environments/environment';

@Component( {
    selector: 'ngb-carousel-basic',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

courses = COURSES;
    errors: any

    constructor( private http: HttpClient ) { }

    ngOnInit() {
    }

    getKeycloakService() {
        return KeycloakService
    }


    stringify( val ) {
        return JSON.stringify( val );
    }

}
