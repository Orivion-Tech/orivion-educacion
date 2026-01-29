import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-surface-1',
  {
    variants: {
      variant: {
        primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-glow',
        secondary: 'bg-white text-text-1 border border-surface-3 hover:border-brand-200 hover:text-brand-700',
        ghost: 'bg-transparent text-text-1 hover:bg-surface-2',
        danger: 'bg-red-600 text-white hover:bg-red-700'
      },
      size: {
        sm: 'h-9 px-4',
        md: 'h-10 px-5',
        lg: 'h-12 px-6 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      const childClassName = child.props?.className;
      return React.cloneElement(child, {
        ...(props as Record<string, unknown>),
        className: cn(buttonVariants({ variant, size }), childClassName, className)
      });
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        type={props.type ?? 'button'}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
