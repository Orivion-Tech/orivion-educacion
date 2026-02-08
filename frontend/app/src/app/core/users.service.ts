import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get<any[]>('/users');
  }

  create(payload: { personaId: string; username: string; password: string }) {
    return this.api.post('/users', payload);
  }

  update(id: string, payload: { personaId?: string; username?: string; password?: string }) {
    return this.api.put(`/users/${id}`, payload);
  }

  remove(id: string) {
    return this.api.delete(`/users/${id}`);
  }
}
