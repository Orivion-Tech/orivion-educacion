import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class GradesService {
  constructor(private api: ApiService) {}

  create(payload: { matriculaId: string; valor: number; rubrica?: any; feedback?: string }) {
    return this.api.post('/grades', payload);
  }

  listByMatricula(matriculaId: string) {
    return this.api.get<any[]>(`/grades?matriculaId=${matriculaId}`);
  }

  listAll() {
    return this.api.get<any[]>('/grades');
  }

  update(id: string, payload: { valor?: number; feedback?: string; rubrica?: any }) {
    return this.api.put(`/grades/${id}`, payload);
  }

  remove(id: string) {
    return this.api.delete(`/grades/${id}`);
  }
}
