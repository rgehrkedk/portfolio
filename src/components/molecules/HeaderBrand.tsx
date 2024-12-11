import { Logo } from '@/components/atoms/Logo';

export interface HeaderBrandProps {
  isDarkMode: boolean;
  isScrolled: boolean;
}

export const HeaderBrand = ({ isDarkMode, isScrolled }: HeaderBrandProps) => {
  return (
    <div className="flex items-center gap-3">
      <Logo size={isScrolled ? 'sm' : 'md'} isDarkMode={isDarkMode} />
      <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Aether
      </span>
    </div>
  );
};