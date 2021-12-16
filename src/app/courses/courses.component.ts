import { Component, OnInit } from '@angular/core';

import { Course } from "../common/contracts/course.interface";

const emptyCourse: Course = {
  id: null,
  title: "",
  description: "",
  percentComplete: 0,
  favorite: false
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = emptyCourse;
  courses: Course[] = [
    {
      id: "1",
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: "2",
      title: 'JavaScript the HARDEST PARTS EVER!',
      description: 'Learn JavaScript like a pro! with Will',
      percentComplete: 78,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course: Course): void {
    this.selectedCourse = course;
  }

  deleteCourse(id: string): void {

  }

  reset() {
    this.selectCourse({...emptyCourse});
  }
}
