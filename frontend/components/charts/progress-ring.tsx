import { cn } from '@/lib/utils';

export function ProgressRing({
  value,
  label,
  className
}: {
  value: number;
  label: string;
  className?: string;
}) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <div
        className="relative flex h-24 w-24 items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(hsl(var(--brand-600)) ${clamped * 3.6}deg, hsl(var(--surface-2)) 0deg)`
        }}
      >
        <div className="h-16 w-16 rounded-full bg-white text-center text-sm font-semibold text-text-1 flex items-center justify-center">
          {clamped}%
        </div>
      </div>
      <p className="text-xs text-text-2">{label}</p>
    </div>
  );
}
