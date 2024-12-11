import type { LucideIcon } from 'lucide-react';  // Import as a type
import { Toggle } from '@/components/atoms/Toggle';
import { themes } from '@/theme/themes';

export interface SettingsToggleProps {
  icon: React.ComponentType<React.ComponentProps<LucideIcon>>;  // Correct type for Lucide icons
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  isDarkMode?: boolean;
  currentTheme?: keyof typeof themes;
}

export const SettingsToggle = ({
  icon: Icon,
  label,
  isChecked,
  onChange,
  isDarkMode = false,
  currentTheme = 'blue'
}: SettingsToggleProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {label}
        </span>
      </div>
      <Toggle
        isChecked={isChecked}
        onChange={onChange}
        isDarkMode={isDarkMode}
        currentTheme={currentTheme}
      />
    </div>
  );
};