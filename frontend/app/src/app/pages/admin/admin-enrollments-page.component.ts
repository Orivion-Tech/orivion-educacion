import { Component, OnInit } from '@angular/core';
import { EnrollmentsService } from '../../core/enrollments.service';

@Component({
  selector: 'app-admin-enrollments-page',
  templateUrl: './admin-enrollments-page.component.html',
  styleUrls: ['./admin-enrollments-page.component.scss']
})
export class AdminEnrollmentsPageComponent implements OnInit {
  enrollments: any[] = [];
  estudianteId = '';
  periodoId = '';
  seccionId = '';
  estado = 'ACTIVO';
  editingId: string | null = null;
  error = '';

  constructor(private enrollmentsService: EnrollmentsService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.enrollmentsService.listAll().subscribe({
      next: (data) => (this.enrollments = data || []),
      error: () => (this.enrollments = [])
    });
  }

  save() {
    this.error = '';
    if (this.editingId) {
      this.enrollmentsService.update(this.editingId, { estado: this.estado }).subscribe({
        next: () => this.resetForm(true),
        error: () => (this.error = 'No se pudo actualizar.')
      });
      return;
    }

    if (!this.estudianteId || !this.periodoId || !this.seccionId) {
      this.error = 'Completa estudianteId, periodoId y seccionId.';
      return;
    }

    this.enrollmentsService
      .create({ estudianteId: this.estudianteId, periodoId: this.periodoId, seccionId: this.seccionId })
      .subscribe({
        next: () => this.resetForm(true),
        error: () => (this.error = 'No se pudo crear.')
      });
  }

  edit(item: any) {
    this.editingId = item.id;
    this.estado = item.estado || 'ACTIVO';
    this.estudianteId = item.estudianteId;
    this.periodoId = item.periodoId;
    this.seccionId = item.seccionId;
  }

  remove(id: string) {
    this.enrollmentsService.remove(id).subscribe({
      next: () => this.load(),
      error: () => (this.error = 'No se pudo eliminar.')
    });
  }

  resetForm(reload = false) {
    this.editingId = null;
    this.estudianteId = '';
    this.periodoId = '';
    this.seccionId = '';
    this.estado = 'ACTIVO';
    this.error = '';
    if (reload) this.load();
  }
}
