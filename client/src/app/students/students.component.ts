import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';

import {STUDENTS} from '../test-data/mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students= STUDENTS;

  selectedStudent: Student;
  
  constructor() { }

  ngOnInit() {
    
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}
