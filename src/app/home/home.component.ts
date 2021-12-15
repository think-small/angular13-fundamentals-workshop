import { Component, OnInit } from '@angular/core';

import { CourseLesson } from "../common/contracts/courseLesson.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons: CourseLesson[] = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  selectedCourseLesson: CourseLesson;

  constructor() {}

  ngOnInit() {}

  handleClick(courseLesson: CourseLesson) {
    this.selectedCourseLesson = courseLesson;  
  }
}
