import * as React from 'react';
import { cn } from '@/lib/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-md border border-[#E2E5EA] bg-white px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#5B6472]/60 focus:outline-none focus:border-[#35507A] focus:ring-1 focus:ring-[#35507A] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 font-sans',
          error && 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
