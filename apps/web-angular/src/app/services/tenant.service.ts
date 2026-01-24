import { Injectable } from '@angular/core';
import tenants from '../../assets/tenants.json';
import { Tenant } from '../models/tenant';

@Injectable({ providedIn: 'root' })
export class TenantService {
  private readonly tenantList = tenants as Tenant[];

  getTenants(): Tenant[] {
    return this.tenantList;
  }

  getTenant(id: string): Tenant | undefined {
    return this.tenantList.find((tenant) => tenant.id === id);
  }
}
