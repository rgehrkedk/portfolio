import { cn } from '@/lib/utils';

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
  currentTheme?: string;
}

export const IconWrapper = ({
  children,
  className,
  isDarkMode = false,
  currentTheme = 'blue'
}: IconWrapperProps) => {
  return (
    <div
      className={cn(
        'w-10 h-10 rounded-xl flex items-center justify-center',
        isDarkMode ? 'text-white' : 'text-gray-900',
        className
      )}
    >
      {children}
    </div>
  );
};