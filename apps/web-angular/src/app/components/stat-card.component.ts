import { Component, Input } from '@angular/core';

@Component({
  selector: 'saa-stat-card',
  standalone: true,
  template: `
    <div class="rounded-lg border p-4 shadow-sm">
      <div class="text-sm text-slate-500">{{ label }}</div>
      <div class="text-2xl font-semibold">{{ value }}</div>
    </div>
  `,
})
export class StatCardComponent {
  @Input() label = '';
  @Input() value: string | number = '';
}
