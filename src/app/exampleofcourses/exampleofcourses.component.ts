import { Component, OnInit } from '@angular/core';
import { COURSE } from '../mock-course';

@Component({
  selector: 'app-exampleofcourses',
  templateUrl: './exampleofcourses.component.html',
  styleUrls: ['./exampleofcourses.component.css']
})
export class ExampleofcoursesComponent implements OnInit {
  course = COURSE;
  constructor() { }

  ngOnInit() {
  }

}
