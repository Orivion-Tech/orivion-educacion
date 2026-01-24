import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/data-table.component';

@Component({
  selector: 'saa-student-subjects',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Mis materias</h2>
    <saa-data-table [columns]="columns" [data]="subjects"></saa-data-table>
  `,
})
export class StudentSubjectsComponent {
  columns = ['name', 'teacher', 'progress'];
  subjects = [
    { name: 'Matemáticas', teacher: 'Profe Luisa', progress: '80%' },
    { name: 'Historia', teacher: 'Profe Ana', progress: '65%' },
  ];
}
