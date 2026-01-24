import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-course-dashboard',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="p-6">
      <h2 class="text-2xl font-semibold mb-2">Course {{ courseId }} Dashboard</h2>
      <p class="text-slate-600">
        Track learner progress, assignments, and announcements for this course.
      </p>
    </mat-card>
  `
})
export class TeacherCourseDashboardComponent {
  readonly courseId = this.route.snapshot.paramMap.get('id') ?? 'unknown';

  constructor(private readonly route: ActivatedRoute) {}
}
