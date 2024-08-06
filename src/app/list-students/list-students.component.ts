import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.scss',
})
export class ListStudentsComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;

  constructor(private http: HttpClient, private router: Router) {
    this.getAllStudent();
  }

  getAllStudent() {
    this.http
      .get('http://localhost:9002/api/student/')
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        this.StudentArray = resultData.data;
      });
  }

  setDelete(data: any) {
    this.http
      .delete('http://localhost:9002/api/student/delete/' + data.id)
      .subscribe((resultData: any) => {
        alert('Student Deleted');
        this.getAllStudent();
      });
  }
  setUpdate(student: any) {
    this.router.navigate(['/edit', student.id]);
  }
  navigateToCreate() {
    this.router.navigate(['/create']);
  }
}
