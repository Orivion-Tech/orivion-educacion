import { Component } from '@angular/core';
import { EmptyStateComponent } from '../../components/empty-state.component';

@Component({
  selector: 'saa-platform-institutions-new',
  standalone: true,
  imports: [EmptyStateComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Nueva institución</h2>
    <saa-empty-state message="Formulario en construcción."></saa-empty-state>
  `,
})
export class PlatformInstitutionsNewComponent {}
