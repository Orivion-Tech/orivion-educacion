import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { StatCardComponent } from '../../components/stat-card.component';
import { ActivityCardComponent } from '../../components/activity-card.component';
import { HeatmapComponent } from '../../components/heatmap.component';

@Component({
  selector: 'saa-student-home',
  standalone: true,
  imports: [NgFor, StatCardComponent, ActivityCardComponent, HeatmapComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Hola, estudiante</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <saa-stat-card label="Racha" [value]="5"></saa-stat-card>
      <saa-stat-card label="Objetivos completados" [value]="12"></saa-stat-card>
      <saa-stat-card label="Dominio promedio" [value]="78%"></saa-stat-card>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <h3 class="text-lg font-semibold mb-2">Plan diario</h3>
        <div class="space-y-3">
          <saa-activity-card
            *ngFor="let activity of activities"
            [title]="activity.title"
            [description]="activity.description"
          ></saa-activity-card>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">Actividad semanal</h3>
        <saa-heatmap [values]="heatmap"></saa-heatmap>
      </div>
    </div>
  `,
})
export class StudentHomeComponent {
  activities = [
    { title: 'Álgebra', description: 'Practicar ecuaciones' },
    { title: 'Lectura', description: 'Comprensión lectora' },
  ];
  heatmap = [1, 2, 3, 2, 1, 2, 3, 2, 1, 3, 2, 1, 2, 3];
}
