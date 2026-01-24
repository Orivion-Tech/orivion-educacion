import { Component } from '@angular/core';
import { StatCardComponent } from '../../components/stat-card.component';

@Component({
  selector: 'saa-parent-dashboard',
  standalone: true,
  imports: [StatCardComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Dashboard padre</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <saa-stat-card label="Progreso" [value]="72%"></saa-stat-card>
      <saa-stat-card label="Alertas" [value]="2"></saa-stat-card>
      <saa-stat-card label="Tareas pendientes" [value]="3"></saa-stat-card>
    </div>
  `,
})
export class ParentDashboardComponent {}
