import { cn } from '@/lib/utils';

export interface ThemeCardProps {
  theme: string;
  isActive: boolean;
  onClick: () => void;
  colors: {
    primary: string;
    secondary: string;
  };
}

export const ThemeCard = ({ theme, isActive, onClick, colors }: ThemeCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative w-14 h-14 rounded-lg transition-transform',
        colors.primary,
        isActive ? 'scale-110 ring-2 ring-offset-2' : 'hover:scale-105'
      )}
      aria-label={`Select ${theme} theme`}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity',
          colors.secondary
        )}
      />
    </button>
  );
};