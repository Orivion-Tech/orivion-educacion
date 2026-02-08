import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../core/grades.service';

@Component({
  selector: 'app-teacher-grades-page',
  templateUrl: './teacher-grades-page.component.html',
  styleUrls: ['./teacher-grades-page.component.scss']
})
export class TeacherGradesPageComponent implements OnInit {
  grades: any[] = [];

  constructor(private gradesService: GradesService) {}

  ngOnInit(): void {
    this.gradesService.listAll().subscribe({
      next: (data) => (this.grades = data || []),
      error: () => (this.grades = [])
    });
  }
}
