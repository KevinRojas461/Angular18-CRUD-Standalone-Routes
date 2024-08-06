import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent {
  stname: string = '';
  course: string = '';
  fee: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  createStudent() {
    let bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee,
    };

    this.http
      .post('http://localhost:9002/api/student/add', bodyData)
      .subscribe(() => {
        alert('Student Registered Successfully');
        // this.resetForm();
        this.router.navigate(['/students']);
      });
  }

  // resetForm() {
  //   this.stname = '';
  //   this.course = '';
  //   this.fee = '';
  // }
}
