import { Component } from '@angular/core';

import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse,HttpRequest } from '@angular/common/http';
import { KeycloakService } from "./core/auth/keycloak.service";
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

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
