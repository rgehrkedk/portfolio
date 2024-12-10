import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  isDarkMode?: boolean;
}

export const Logo = ({ size = 'md', isDarkMode = false }: LogoProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-10 h-10'
  };

  return (
    <div
      className={cn(
        'rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-200',
        sizes[size],
        isDarkMode ? 'bg-white' : 'bg-gray-900'
      )}
    >
      <div className="absolute inset-0 opacity-90 mix-blend-overlay">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500" />
      </div>
      <span className={`text-lg font-bold relative z-10 ${isDarkMode ? 'text-gray-900' : 'text-white'}`}>
        A
      </span>
    </div>
  );
};