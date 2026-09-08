import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

export const cardVariants = cva(
  'rounded-xl border border-[#E2E5EA] bg-white text-[#0F172A] transition-all duration-300 relative overflow-hidden group',
  {
    variants: {
      variant: {
        default: 'shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-[#35507A]/40 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10),0_0_15px_rgba(53,80,122,0.12)]',
        interactive: 'shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-[#35507A]/60 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.12),0_0_20px_rgba(53,80,122,0.18)] cursor-pointer',
        glass: 'backdrop-blur-md bg-white/80 border-[#E2E5EA] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:border-[#35507A]/40',
        outline: 'border border-[#E2E5EA] bg-transparent hover:border-[#35507A]/50 hover:bg-white',
        flat: 'bg-[#F7F8FA] border border-[#E2E5EA]',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-4', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-xl font-semibold tracking-tight text-foreground', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-4 border-t border-border/50 mt-4', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';
