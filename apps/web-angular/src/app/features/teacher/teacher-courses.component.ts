import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/data-table.component';

@Component({
  selector: 'saa-teacher-courses',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Cursos</h2>
    <saa-data-table [columns]="columns" [data]="courses"></saa-data-table>
  `,
})
export class TeacherCoursesComponent {
  columns = ['name', 'students'];
  courses = [
    { name: 'Matemáticas 1', students: 24 },
    { name: 'Ciencias', students: 18 },
  ];
}
