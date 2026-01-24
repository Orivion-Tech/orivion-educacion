import { Component } from '@angular/core';
import { EmptyStateComponent } from '../../components/empty-state.component';

@Component({
  selector: 'saa-teacher-library',
  standalone: true,
  imports: [EmptyStateComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Biblioteca</h2>
    <saa-empty-state message="Biblioteca en construcción."></saa-empty-state>
  `,
})
export class TeacherLibraryComponent {}
