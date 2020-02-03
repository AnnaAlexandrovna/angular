import { Component, OnInit } from '@angular/core';
import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { KeycloakService } from "../core/auth/keycloak.service";
import { environment } from './../../environments/environment';

@Component({
selector: 'app-changecoure',
templateUrl: './changecoure.component.html',
styleUrls: ['./changecoure.component.css']
})
export class ChangecoureComponent implements OnInit {

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
