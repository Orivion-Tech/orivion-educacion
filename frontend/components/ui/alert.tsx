import * as React from 'react';
import { cn } from '@/lib/utils';

export function Alert({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-2xl border border-surface-3 bg-white px-4 py-3 text-sm text-text-1 shadow-sm',
        className
      )}
      {...props}
    />
  );
}

export function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('font-medium', className)} {...props} />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-text-2', className)} {...props} />;
}
