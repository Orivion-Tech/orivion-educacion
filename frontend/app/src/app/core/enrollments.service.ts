import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class EnrollmentsService {
  constructor(private api: ApiService) {}

  create(payload: { estudianteId: string; periodoId: string; seccionId: string }) {
    return this.api.post('/enrollments', payload);
  }

  listByStudent(estudianteId: string) {
    return this.api.get<any[]>(`/enrollments?estudianteId=${estudianteId}`);
  }

  listAll() {
    return this.api.get<any[]>('/enrollments');
  }

  update(id: string, payload: { estado?: string }) {
    return this.api.put(`/enrollments/${id}`, payload);
  }

  remove(id: string) {
    return this.api.delete(`/enrollments/${id}`);
  }
}
