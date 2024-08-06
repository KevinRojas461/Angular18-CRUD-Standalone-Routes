import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  stname: string = '';
  course: string = '';
  fee: string = '';
  currentStudentID: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('EditStudentComponent initialized');
    this.route.params.subscribe((params) => {
      this.currentStudentID = params['id'];
      this.getStudent(this.currentStudentID);
    });
  }

  getStudent(id: string) {
    this.http
      .get('http://localhost:9002/api/student/' + id)
      .subscribe((response: any) => {
        if (response.status) {
          const student = response.data[0]; // Accede al primer elemento del array
          this.stname = student.stname;
          this.course = student.course;
          this.fee = student.fee;
        } else {
          alert('Error fetching student data');
        }
      });
  }

  update() {
    let bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee,
    };

    this.http
      .put(
        'http://localhost:9002/api/student/update/' + this.currentStudentID,
        bodyData
      )
      .subscribe(() => {
        alert('Student Updated Successfully');
        this.router.navigate(['/students']);
      });
  }
}
