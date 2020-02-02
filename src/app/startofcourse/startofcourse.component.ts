import { Component, OnInit } from '@angular/core';
import { COURSE } from '../mock-course';

@Component({
  selector: 'app-startofcourse',
  templateUrl: './startofcourse.component.html',
  styleUrls: ['./startofcourse.component.css']
})
export class StartofcourseComponent implements OnInit {

  course = COURSE;
  constructor() { }

  ngOnInit() {
  }

}
