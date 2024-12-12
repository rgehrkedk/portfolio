// src/components/atoms/FieldInput.tsx

import React from 'react';
import { cn } from '@/lib/utils'; // Assuming a classnames utility function

interface FieldInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused?: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
  isDarkMode?: boolean;
  isRequired?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'text' | 'password' | 'email';
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const sizeClasses = {
  small: 'py-1 px-2 text-sm',
  medium: 'py-2 px-3 text-base',
  large: 'py-3 px-4 text-lg',
};

const FieldInput: React.FC<FieldInputProps> = ({
  placeholder,
  value,
  onChange,
  isFocused,
  isDisabled,
  hasError,
  isDarkMode,
  isRequired,
  size = 'medium',
  type = 'text',
  icon: Icon,
}) => {
  return (
    <div className={cn('relative', sizeClasses[size])}>
      {Icon && <Icon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        required={isRequired}
        className={cn(
          'w-full border rounded-lg outline-none transition-all duration-200',
          sizeClasses[size],
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900',
          isDisabled ? 'bg-gray-200 cursor-not-allowed' : 'focus:ring-2 focus:ring-blue-500',
          hasError ? 'border-red-500' : 'border-gray-300',
          Icon ? 'pl-10' : ''
        )}
        autoFocus={isFocused}
      />
    </div>
  );
};

export default FieldInput;