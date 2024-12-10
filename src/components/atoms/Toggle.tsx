import { cn } from '@/lib/utils';

interface ToggleProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  currentTheme?: string;
  isDarkMode?: boolean;
}

export const Toggle = ({
  isChecked,
  onChange,
  currentTheme = 'blue',
  isDarkMode = false
}: ToggleProps) => {
  return (
    <button
      onClick={() => onChange(!isChecked)}
      className={cn(
        'w-11 h-6 rounded-full relative transition-all duration-200',
        isChecked ? `bg-${currentTheme}-500` : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
      )}
    >
      <div
        className={cn(
          'absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200',
          isChecked ? 'left-6' : 'left-1'
        )}
      />
    </button>
  );
};