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
          'flex h-11 w-full rounded-md border border-[#1A1F27] bg-[#0B0F14] px-4 py-2.5 text-sm text-[#E6E8EB] placeholder:text-[#6B7280]/60 focus:outline-none focus:border-[#BFC5CC] focus:ring-1 focus:ring-[#BFC5CC] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 font-sans',
          error && 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
