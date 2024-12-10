export interface Theme {
    primary: string;
    secondary: string;
    accent: string;
    subtle: string;
    hover: string;
  }
  
  export interface ThemeContextType {
    currentTheme: string;
    setCurrentTheme: (theme: string) => void;
    isDarkMode: boolean;
    setIsDarkMode: (isDark: boolean) => void;
  }