import { Component, OnInit } from '@angular/core';
import { EnrollmentsService } from '../../core/enrollments.service';

@Component({
  selector: 'app-teacher-enrollments-page',
  templateUrl: './teacher-enrollments-page.component.html',
  styleUrls: ['./teacher-enrollments-page.component.scss']
})
export class TeacherEnrollmentsPageComponent implements OnInit {
  enrollments: any[] = [];

  constructor(private enrollmentsService: EnrollmentsService) {}

  ngOnInit(): void {
    this.enrollmentsService.listAll().subscribe({
      next: (data) => (this.enrollments = data || []),
      error: () => (this.enrollments = [])
    });
  }
}
