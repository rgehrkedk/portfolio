import { cn } from '@/lib/utils';
import { themes, Theme } from '@/theme/themes';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  isDarkMode?: boolean;
  theme?: keyof typeof themes;
}

export const Logo = ({ size = 'md', isDarkMode = false, theme = 'blue' }: LogoProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-10 h-10'
  };

  const selectedTheme: Theme = themes[theme];

  return (
    <div
      className={cn(
        'rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-200',
        sizes[size],
        isDarkMode ? 'bg-white' : 'bg-gray-900'
      )}
    >
      <div className="absolute inset-0 opacity-90 mix-blend-overlay">
        <div className={`absolute top-0 left-0 w-full h-full ${selectedTheme.primary}`} />
      </div>
      <svg
        className="relative z-10"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isDarkMode ? 'currentColor' : 'white'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 22h20L12 2zM12 6.5l4.5 9H7.5l4.5-9z" />
      </svg>
    </div>
  );
};