import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const sectionVariants = cva(
  'relative w-full transition-colors duration-200',
  {
    variants: {
      spacing: {
        compact: 'py-8 md:py-12',
        default: 'py-12 md:py-20',
        comfortable: 'py-16 md:py-28 lg:py-32',
        hero: 'pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32',
      },
      background: {
        transparent: 'bg-transparent',
        default: 'bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100',
        subtle: 'bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
        dark: 'bg-neutral-950 text-neutral-50 dark:bg-neutral-900 dark:text-neutral-50',
        brand: 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900',
      },
    },
    defaultVariants: {
      spacing: 'default',
      background: 'transparent',
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, background, as: Component = 'section', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(sectionVariants({ spacing, background, className }))}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';
