'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/config/navigation';
import { ICONS } from './icon-map';

export function MobileNav({
  items,
  isOpen,
  onClose
}: {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden',
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <div
        className={cn(
          'absolute left-0 top-0 h-full w-72 bg-white px-4 py-6 shadow-xl transition-transform',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between pb-4">
          <p className="text-sm font-semibold">Menu</p>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-surface-2">
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="space-y-1">
          {items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-text-2 hover:bg-surface-2"
                onClick={onClose}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
