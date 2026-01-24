import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/data-table.component';

@Component({
  selector: 'saa-admin-users',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Usuarios</h2>
    <saa-data-table [columns]="columns" [data]="users"></saa-data-table>
  `,
})
export class AdminUsersComponent {
  columns = ['name', 'role'];
  users = [
    { name: 'Ana Torres', role: 'Estudiante' },
    { name: 'Luis Perez', role: 'Docente' },
  ];
}
