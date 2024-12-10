import type { Meta, StoryObj } from '@storybook/react';
import { IconWrapper } from './IconWrapper';
import { Sun } from 'lucide-react';

const meta: Meta<typeof IconWrapper> = {
  title: 'Atoms/IconWrapper',
  component: IconWrapper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconWrapper>;

export const Default: Story = {
  args: {
    children: <Sun className="w-5 h-5" />,
  },
};

export const DarkMode: Story = {
  args: {
    children: <Sun className="w-5 h-5" />,
    isDarkMode: true,
  },
};

export const CustomTheme: Story = {
  args: {
    children: <Sun className="w-5 h-5" />,
    currentTheme: 'purple',
  },
};