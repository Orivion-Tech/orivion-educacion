import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../core/students.service';

@Component({
  selector: 'app-admin-students-page',
  templateUrl: './admin-students-page.component.html',
  styleUrls: ['./admin-students-page.component.scss']
})
export class AdminStudentsPageComponent implements OnInit {
  students: any[] = [];
  actorId = '';
  codigoMatricula = '';
  editingId: string | null = null;
  error = '';

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.studentsService.list().subscribe({
      next: (data) => (this.students = data || []),
      error: () => (this.students = [])
    });
  }

  save() {
    this.error = '';
    if (!this.actorId && !this.editingId) {
      this.error = 'ActorId requerido.';
      return;
    }

    if (this.editingId) {
      this.studentsService.update(this.editingId, { codigoMatricula: this.codigoMatricula || undefined }).subscribe({
        next: () => this.resetForm(true),
        error: () => (this.error = 'No se pudo actualizar.')
      });
      return;
    }

    this.studentsService.create({ actorId: this.actorId, codigoMatricula: this.codigoMatricula || undefined }).subscribe({
      next: () => this.resetForm(true),
      error: () => (this.error = 'No se pudo crear.')
    });
  }

  edit(item: any) {
    this.editingId = item.id;
    this.actorId = item.actorId;
    this.codigoMatricula = item.codigoMatricula || '';
  }

  remove(id: string) {
    this.studentsService.remove(id).subscribe({
      next: () => this.load(),
      error: () => (this.error = 'No se pudo eliminar.')
    });
  }

  resetForm(reload = false) {
    this.editingId = null;
    this.actorId = '';
    this.codigoMatricula = '';
    this.error = '';
    if (reload) this.load();
  }
}
