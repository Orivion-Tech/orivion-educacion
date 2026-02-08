import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from '../../core/institutions.service';
import { AuthStateService } from '../../core/auth-state.service';

@Component({
  selector: 'app-admin-tenants-page',
  templateUrl: './admin-tenants-page.component.html',
  styleUrls: ['./admin-tenants-page.component.scss']
})
export class AdminTenantsPageComponent implements OnInit {
  institutions: any[] = [];
  nombre = '';
  ruc = '';
  editingId: string | null = null;
  error = '';

  constructor(
    private institutionsService: InstitutionsService,
    public authState: AuthStateService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.institutionsService.list().subscribe({
      next: (data) => (this.institutions = data || []),
      error: () => (this.institutions = [])
    });
  }

  save() {
    this.error = '';
    if (!this.nombre) {
      this.error = 'Nombre requerido.';
      return;
    }

    if (this.editingId) {
      this.institutionsService
        .update(this.editingId, { nombre: this.nombre, ruc_tax_id: this.ruc || undefined })
        .subscribe({
          next: () => this.resetForm(true),
          error: () => (this.error = 'No se pudo actualizar.')
        });
      return;
    }

    this.institutionsService
      .create({ nombre: this.nombre, ruc_tax_id: this.ruc || undefined })
      .subscribe({
        next: () => this.resetForm(true),
        error: () => (this.error = 'No se pudo crear.')
      });
  }

  edit(item: any) {
    this.editingId = item.id;
    this.nombre = item.nombre;
    this.ruc = item.ruc_tax_id || '';
  }

  remove(id: string) {
    this.institutionsService.remove(id).subscribe({
      next: () => this.load(),
      error: () => (this.error = 'No se pudo eliminar.')
    });
  }

  resetForm(reload = false) {
    this.editingId = null;
    this.nombre = '';
    this.ruc = '';
    this.error = '';
    if (reload) this.load();
  }
}
