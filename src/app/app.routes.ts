import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListStudentsComponent } from './list-students/list-students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';

export const routes: Routes = [
  { path: '', component: ListStudentsComponent },
  { path: 'edit/:id', component: EditStudentComponent },
  { path: 'create', component: CreateStudentComponent },
  { path: 'students', component: ListStudentsComponent }, // Asegúrate de tener esta ruta
  { path: '', redirectTo: '/students', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
