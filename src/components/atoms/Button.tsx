import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isDarkMode?: boolean;
  currentTheme?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', isDarkMode = false, currentTheme = 'blue', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          {
            'bg-var(--primary-color) text-white hover:bg-var(--secondary-color) focus:ring-var(--primary-color)': variant === 'solid',
            'border-2 border-var(--primary-color) text-var(--primary-color) hover:bg-var(--subtle-color) focus:ring-var(--primary-color)': variant === 'outline',
            'text-var(--primary-color) hover:bg-var(--subtle-color) focus:ring-var(--primary-color)': variant === 'ghost',
            'px-3 py-1 text-sm': size === 'sm',
            'px-4 py-2': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';