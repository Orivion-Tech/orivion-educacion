'use client';

import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LogoutButton } from '@/components/auth/logout-button';

export function Topbar({
  userName,
  onOpenMobile
}: {
  userName: string;
  onOpenMobile: () => void;
}) {
  return (
    <div className="flex h-16 items-center justify-between border-b border-surface-3 bg-white px-4 lg:px-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onOpenMobile} className="lg:hidden">
          <Menu className="h-4 w-4" />
        </Button>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-2">Adaptive Learning</p>
          <h1 className="text-lg font-semibold">Bienvenido, {userName}</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm">
          <Bell className="h-4 w-4" />
        </Button>
        <LogoutButton />
        <Avatar>
          <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
