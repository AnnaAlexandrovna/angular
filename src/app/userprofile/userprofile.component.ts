import { Component, OnInit } from '@angular/core';
import { USER } from '../mock-users';
import { User1 } from '../user1';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
user = USER;

  constructor() { }

  ngOnInit() {
  }

}
