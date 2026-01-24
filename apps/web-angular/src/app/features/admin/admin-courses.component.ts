import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/data-table.component';

@Component({
  selector: 'saa-admin-courses',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Cursos</h2>
    <saa-data-table [columns]="columns" [data]="courses"></saa-data-table>
  `,
})
export class AdminCoursesComponent {
  columns = ['name', 'students'];
  courses = [
    { name: 'Matemáticas', students: 120 },
    { name: 'Ciencias', students: 80 },
  ];
}
