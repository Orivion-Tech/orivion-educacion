import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'saa-heatmap',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="grid grid-cols-7 gap-2">
      <div
        *ngFor="let value of values"
        class="h-4 w-4 rounded"
        [class.bg-emerald-200]="value === 1"
        [class.bg-emerald-400]="value === 2"
        [class.bg-emerald-600]="value === 3"
      ></div>
    </div>
  `,
})
export class HeatmapComponent {
  @Input() values: number[] = [];
}
