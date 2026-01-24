import { Injectable } from '@angular/core';

const TENANT_FEATURES: Record<string, string[]> = {
  'north-campus': ['attendance', 'billing', 'analytics', 'family-portal'],
  'south-campus': ['attendance', 'family-portal'],
  default: ['attendance']
};

@Injectable({
  providedIn: 'root'
})
export class TenantFeatureService {
  getFeatures(institutionId: string): string[] {
    return TENANT_FEATURES[institutionId] ?? TENANT_FEATURES.default;
  }

  hasFeature(institutionId: string, feature: string): boolean {
    return this.getFeatures(institutionId).includes(feature);
  }
}
