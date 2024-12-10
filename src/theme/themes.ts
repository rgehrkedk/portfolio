import { Theme } from './types';

export const themes: Record<string, Theme> = {
  blue: {
    primary: 'bg-blue-500',
    secondary: 'bg-blue-400',
    accent: 'bg-blue-300',
    subtle: 'bg-blue-500/20',
    hover: 'hover:bg-blue-600'
  },
  purple: {
    primary: 'bg-purple-500',
    secondary: 'bg-purple-400',
    accent: 'bg-purple-300',
    subtle: 'bg-purple-500/20',
    hover: 'hover:bg-purple-600'
  },
  teal: {
    primary: 'bg-teal-500',
    secondary: 'bg-teal-400',
    accent: 'bg-teal-300',
    subtle: 'bg-teal-500/20',
    hover: 'hover:bg-teal-600'
  }
};