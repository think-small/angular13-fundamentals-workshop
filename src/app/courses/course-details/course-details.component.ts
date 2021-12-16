import { Component, OnInit, Input } from '@angular/core';
import { Course } from "../../common/contracts/course.interface";

const emptyCourse: Course = {
  id: null,
  title: "",
  description: "",
  percentComplete: 0,
  favorite: false
};

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  private _selectedCourse: Course;
  @Input() 
  set selectedCourse(course: Course) {
    this._selectedCourse = {...course};
  }
  get selectedCourse() {
    return this._selectedCourse;
  }

  constructor() { }

  ngOnInit(): void {
  }

  reset(): void {    
    this._selectedCourse = {...emptyCourse};
  }
}
