import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="p-6">
      <h2 class="text-2xl font-semibold mb-2">Student Home</h2>
      <p class="text-slate-600">
        Welcome to your personalized student dashboard with upcoming lessons and progress.
      </p>
    </mat-card>
  `
})
export class StudentHomeComponent {}
