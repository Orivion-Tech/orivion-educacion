'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/config/navigation';
import { Badge } from '@/components/ui/badge';
import { ICONS } from './icon-map';

export function Sidebar({
  items,
  roleLabel,
  tenantName,
  tenantLogo
}: {
  items: NavItem[];
  roleLabel: string;
  tenantName: string;
  tenantLogo?: string;
}) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-surface-3 lg:bg-white">
      <div className="flex h-16 items-center gap-3 px-6">
        {tenantLogo ? (
          <Image
            src={tenantLogo}
            alt={tenantName}
            width={36}
            height={36}
            className="h-9 w-9 rounded-xl object-cover"
          />
        ) : (
          <div className="h-9 w-9 rounded-xl bg-brand-600" />
        )}
        <div className="text-sm">
          <p className="font-semibold">{tenantName}</p>
          <p className="text-xs text-text-2">{roleLabel}</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = ICONS[item.icon];
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors',
                active
                  ? 'bg-brand-50 text-brand-800'
                  : 'text-text-2 hover:bg-surface-2 hover:text-text-1'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
              {active ? <Badge className="ml-auto">Actual</Badge> : null}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
