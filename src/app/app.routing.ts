import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './utility/app.guard';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, 
  {
    path: 'welcome',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./views/welcome/welcome.module').then(m => m.WelcomeModule), data: { title: 'Welcome', breadcrumb: 'WELCOME'} }  
    ]
  },
  {
    path: 'course',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./views/course/course.module').then(m => m.CourseModule), data: { title: 'Course', breadcrumb: 'COURSE'} }  
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

