import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFC5CC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14] disabled:pointer-events-none disabled:opacity-40 select-none relative cursor-pointer font-sans uppercase text-xs',
  {
    variants: {
      variant: {
        primary:
          'bg-[#0F172A] text-[#E6E8EB] border border-[#BFC5CC]/50 hover:bg-[#BFC5CC] hover:text-[#0F172A] hover:border-[#BFC5CC] shadow-[0_0_15px_rgba(191,197,204,0.12)] active:bg-[#0F172A] active:text-[#E6E8EB] active:scale-[0.98]',
        secondary:
          'bg-[#11161D] text-[#E6E8EB] border border-[#1A1F27] hover:border-[#BFC5CC]/60 hover:text-[#BFC5CC] hover:bg-[#1A1F27] active:scale-[0.98]',
        outline:
          'border border-[#BFC5CC] text-[#BFC5CC] bg-transparent hover:bg-[#BFC5CC] hover:text-[#0F172A] active:bg-[#0F172A] active:text-[#E6E8EB] active:scale-[0.98]',
        ghost:
          'text-[#E6E8EB] hover:text-[#BFC5CC] hover:bg-[#11161D] active:scale-[0.98]',
        goldGlow:
          'bg-[#0F172A] border border-[#BFC5CC] text-[#BFC5CC] hover:bg-[#BFC5CC] hover:text-[#0F172A] shadow-[0_0_20px_rgba(191,197,204,0.2)] active:scale-[0.98]',
        goldOutline:
          'border border-[#BFC5CC]/60 text-[#BFC5CC] hover:bg-[#BFC5CC]/10 active:scale-[0.98]',
        danger:
          'bg-error text-error-foreground hover:bg-error/90 shadow-xs active:scale-[0.98]',
        link: 'text-[#BFC5CC] underline-offset-4 hover:underline p-0 h-auto font-normal active:opacity-80 normal-case',
      },
      size: {
        sm: 'h-8 px-3 text-[11px] gap-1.5 rounded-md',
        md: 'h-10 px-5 text-xs gap-2 rounded-md',
        lg: 'h-12 px-7 text-xs gap-2.5 rounded-lg',
        icon: 'h-10 w-10 p-0 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      type = 'button',
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : type}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading ? (
              <svg
                className="animate-spin h-4 w-4 shrink-0 text-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              leftIcon && (
                <span className="inline-flex shrink-0 items-center justify-center" aria-hidden="true">
                  {leftIcon}
                </span>
              )
            )}
            {children && (
              <span className={cn('inline-flex items-center', loading && 'opacity-80')}>
                {children}
              </span>
            )}
            {!loading && rightIcon && (
              <span className="inline-flex shrink-0 items-center justify-center" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </Component>
    );
  }
);

Button.displayName = 'Button';
