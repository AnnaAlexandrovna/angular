import { Component, OnInit, Input } from '@angular/core';
import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams , HttpResponse, HttpRequest} from '@angular/common/http';
import { KeycloakService } from "../core/auth/keycloak.service";
import { environment } from './../../environments/environment';


@Component({
selector: 'app-createcourse',
templateUrl: './createcourse.component.html',
styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent implements OnInit {

errors: any

constructor(private http: HttpClient) {  }

  ngOnInit() {
    }

    getKeycloakService() {
        return KeycloakService
    }

    stringify( val ) {
        return JSON.stringify( val );
    }


}
