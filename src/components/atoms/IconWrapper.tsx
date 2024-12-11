import { cn } from '@/lib/utils';
import { themes } from '@/theme/themes';

export interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
  currentTheme?: keyof typeof themes;
}

export const IconWrapper = ({
  children,
  className,
  isDarkMode = false,
  currentTheme = 'blue'
}: IconWrapperProps) => {
  const themeColors = themes[currentTheme];

  return (
    <div
      className={cn(
        'w-10 h-10 rounded-xl flex items-center justify-center',
        themeColors.subtle,
        isDarkMode ? 'text-white' : 'text-gray-900',
        className
      )}
    >
      {children}
    </div>
  );
};