import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCourseComponent } from './list-course/list-course.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-course'},
  { path: 'list-course', component: ListCourseComponent },
  { path: 'add-course', component: AddCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
