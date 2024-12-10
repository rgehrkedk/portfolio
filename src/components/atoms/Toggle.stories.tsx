import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Checked: Story = {
  args: {
    isChecked: true,
    onChange: () => {},
  },
};

export const Unchecked: Story = {
  args: {
    isChecked: false,
    onChange: () => {},
  },
};

export const DarkMode: Story = {
  args: {
    isChecked: true,
    onChange: () => {},
    isDarkMode: true,
  },
};

export const CustomTheme: Story = {
  args: {
    isChecked: true,
    onChange: () => {},
    currentTheme: 'purple',
  },
};