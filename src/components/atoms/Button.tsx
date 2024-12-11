import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { themes } from '@/theme/themes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  theme?: keyof typeof themes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', theme = 'blue', disabled, ...props }, ref) => {
    const themeColors = themes[theme];

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          {
            [cn(themeColors.primary, 'text-white', themeColors.hover)]: variant === 'solid' && !disabled,
            [`border-2 border-current text-${theme}-500 hover:bg-${theme}-50`]: variant === 'outline' && !disabled,
            [`text-${theme}-500 hover:bg-${theme}-50`]: variant === 'ghost' && !disabled,
            'px-3 py-1 text-sm': size === 'sm',
            'px-4 py-2': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
            'bg-gray-200': disabled && variant === 'solid', // Add background for disabled solid variant
            'bg-gray-100 border-gray-200': disabled && variant === 'outline', // Add background for disabled outline variant
            'cursor-not-allowed opacity-50': disabled, // Add disabled styles
          },
          className
        )}
        disabled={disabled} // Pass the disabled prop to the button
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';