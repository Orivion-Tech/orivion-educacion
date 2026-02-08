import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get<any[]>('/students');
  }

  create(payload: { actorId: string; codigoMatricula?: string }) {
    return this.api.post('/students', payload);
  }

  update(id: string, payload: { codigoMatricula?: string }) {
    return this.api.put(`/students/${id}`, payload);
  }

  remove(id: string) {
    return this.api.delete(`/students/${id}`);
  }
}
