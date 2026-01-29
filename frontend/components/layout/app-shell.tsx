'use client';

import * as React from 'react';
import type { NavItem } from '@/config/navigation';
import { Sidebar } from './sidebar';
import { Topbar } from './topbar';
import { MobileNav } from './mobile-nav';

export function AppShell({
  items,
  roleLabel,
  tenantName,
  tenantLogo,
  userName,
  children
}: {
  items: NavItem[];
  roleLabel: string;
  tenantName: string;
  tenantLogo?: string;
  userName: string;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-surface-1">
      <MobileNav
        items={items}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <div className="flex min-h-screen">
        <Sidebar
          items={items}
          roleLabel={roleLabel}
          tenantName={tenantName}
          tenantLogo={tenantLogo}
        />
        <div className="flex flex-1 flex-col">
          <Topbar userName={userName} onOpenMobile={() => setMobileOpen(true)} />
          <main className="flex-1 px-4 py-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
