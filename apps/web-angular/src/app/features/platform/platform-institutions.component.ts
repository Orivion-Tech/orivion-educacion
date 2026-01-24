import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/data-table.component';

@Component({
  selector: 'saa-platform-institutions',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Instituciones</h2>
    <saa-data-table [columns]="columns" [data]="institutions"></saa-data-table>
  `,
})
export class PlatformInstitutionsComponent {
  columns = ['name', 'modules'];
  institutions = [
    { name: 'Colegio Andino', modules: 'student, teacher, admin' },
    { name: 'Instituto Pacífico', modules: 'student, teacher' },
  ];
}
