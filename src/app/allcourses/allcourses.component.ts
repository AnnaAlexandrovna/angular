import { Component} from '@angular/core';
import { COURSES } from '../mock-course';
import { ISMEAUTHORS } from '../mock-isMeAuthor';
import { SORTBYCATEGORYS } from '../mock-sortByCategory';
import { ISPASSSORTS } from '../mock-isPassSort';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent {
courses = COURSES;
isMeAuthorCases = ISMEAUTHORS;
isPassCases = ISPASSSORTS;
sortByCategoryCases = SORTBYCATEGORYS;
  constructor() { }

}
