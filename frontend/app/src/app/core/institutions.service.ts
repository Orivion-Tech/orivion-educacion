import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class InstitutionsService {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get<any[]>('/institutions');
  }

  create(payload: { nombre: string; ruc_tax_id?: string }) {
    return this.api.post('/institutions', payload);
  }

  update(id: string, payload: { nombre?: string; ruc_tax_id?: string }) {
    return this.api.put(`/institutions/${id}`, payload);
  }

  remove(id: string) {
    return this.api.delete(`/institutions/${id}`);
  }
}
