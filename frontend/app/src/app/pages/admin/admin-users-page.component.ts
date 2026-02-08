import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/users.service';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.scss']
})
export class AdminUsersPageComponent implements OnInit {
  users: any[] = [];
  personaId = '';
  username = '';
  password = '';
  editingId: string | null = null;
  error = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.usersService.list().subscribe({
      next: (data) => (this.users = data || []),
      error: () => (this.users = [])
    });
  }

  save() {
    this.error = '';
    if (!this.personaId || !this.username) {
      this.error = 'PersonaId y usuario son requeridos.';
      return;
    }

    if (this.editingId) {
      this.usersService
        .update(this.editingId, { personaId: this.personaId, username: this.username, password: this.password || undefined })
        .subscribe({
          next: () => this.resetForm(true),
          error: () => (this.error = 'No se pudo actualizar el usuario.')
        });
      return;
    }

    if (!this.password) {
      this.error = 'Contraseña requerida.';
      return;
    }

    this.usersService.create({ personaId: this.personaId, username: this.username, password: this.password }).subscribe({
      next: () => this.resetForm(true),
      error: () => {
        this.error = 'No se pudo crear el usuario.';
      }
    });
  }

  edit(item: any) {
    this.editingId = item.id;
    this.personaId = item.personaId;
    this.username = item.username;
    this.password = '';
  }

  remove(id: string) {
    this.usersService.remove(id).subscribe({
      next: () => this.load(),
      error: () => (this.error = 'No se pudo eliminar.')
    });
  }

  resetForm(reload = false) {
    this.editingId = null;
    this.personaId = '';
    this.username = '';
    this.password = '';
    this.error = '';
    if (reload) this.load();
  }
}
