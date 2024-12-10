import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { themes } from '@/theme/themes';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  theme?: keyof typeof themes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', theme = 'blue', ...props }, ref) => {
    const themeColors = themes[theme];

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          {
            [cn(themeColors.primary, 'text-white', themeColors.hover)]: variant === 'solid',
            [`border-2 border-current text-${theme}-500 hover:bg-${theme}-50`]: variant === 'outline',
            [`text-${theme}-500 hover:bg-${theme}-50`]: variant === 'ghost',
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