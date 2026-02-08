import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../core/grades.service';

@Component({
  selector: 'app-admin-grades-page',
  templateUrl: './admin-grades-page.component.html',
  styleUrls: ['./admin-grades-page.component.scss']
})
export class AdminGradesPageComponent implements OnInit {
  grades: any[] = [];
  matriculaId = '';
  valor = 0;
  feedback = '';
  editingId: string | null = null;
  error = '';

  constructor(private gradesService: GradesService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.gradesService.listAll().subscribe({
      next: (data) => (this.grades = data || []),
      error: () => (this.grades = [])
    });
  }

  save() {
    this.error = '';
    if (this.editingId) {
      this.gradesService.update(this.editingId, { valor: this.valor, feedback: this.feedback || undefined }).subscribe({
        next: () => this.resetForm(true),
        error: () => (this.error = 'No se pudo actualizar.')
      });
      return;
    }

    if (!this.matriculaId) {
      this.error = 'matriculaId requerido.';
      return;
    }

    this.gradesService.create({ matriculaId: this.matriculaId, valor: this.valor, feedback: this.feedback || undefined }).subscribe({
      next: () => this.resetForm(true),
      error: () => (this.error = 'No se pudo crear.')
    });
  }

  edit(item: any) {
    this.editingId = item.id;
    this.matriculaId = item.matriculaId;
    this.valor = item.valor;
    this.feedback = item.feedback || '';
  }

  remove(id: string) {
    this.gradesService.remove(id).subscribe({
      next: () => this.load(),
      error: () => (this.error = 'No se pudo eliminar.')
    });
  }

  resetForm(reload = false) {
    this.editingId = null;
    this.matriculaId = '';
    this.valor = 0;
    this.feedback = '';
    this.error = '';
    if (reload) this.load();
  }
}
