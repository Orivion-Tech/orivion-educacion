import { Component, Input } from '@angular/core';

@Component({
  selector: 'saa-empty-state',
  standalone: true,
  template: `
    <div class="rounded-lg border border-dashed p-6 text-center text-slate-500">
      {{ message }}
    </div>
  `,
})
export class EmptyStateComponent {
  @Input() message = 'Sin datos disponibles.';
}
