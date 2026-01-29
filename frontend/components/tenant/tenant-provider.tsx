'use client';

import * as React from 'react';
import type { TenantConfig } from '@/config/tenants';

type TenantContextValue = {
  tenant: TenantConfig;
};

const TenantContext = React.createContext<TenantContextValue | null>(null);

export function TenantProvider({
  tenant,
  children
}: {
  tenant: TenantConfig;
  children: React.ReactNode;
}) {
  return (
    <TenantContext.Provider value={{ tenant }}>{children}</TenantContext.Provider>
  );
}

export function useTenantContext() {
  const context = React.useContext(TenantContext);
  if (!context) {
    throw new Error('useTenantContext must be used within TenantProvider');
  }
  return context;
}
