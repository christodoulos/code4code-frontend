import { Component } from '@angular/core';
import { StudentNavigationComponent } from '../student-navigation/student-navigation.component';
import { StudentDashboardContentComponent } from '../student-dashboard-content/student-dashboard-content.component';
import { FooterComponent } from '@c4c/layout';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    StudentNavigationComponent,
    StudentDashboardContentComponent,
    FooterComponent,
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css',
})
export class StudentDashboardComponent {}
