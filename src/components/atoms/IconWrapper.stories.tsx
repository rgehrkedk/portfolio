import type { Meta, StoryObj } from '@storybook/react';
import { IconWrapper } from './IconWrapper';
import { Camera } from 'lucide-react';

const meta: Meta<typeof IconWrapper> = {
  title: 'Atoms/IconWrapper',
  component: IconWrapper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A wrapper component that provides consistent styling and theming for icons.',
      },
    },
  },
  args: {
    children: <Camera className="w-5 h-5" />,
  },
  argTypes: {
    isDarkMode: {
      control: 'boolean',
      description: 'Whether the icon should use dark mode styling',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    currentTheme: {
      control: 'select',
      options: ['blue', 'purple', 'teal'],
      description: 'The color theme of the icon wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'object',
      description: 'The icon component to wrap',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconWrapper>;

export const Default: Story = {
  args: {
    children: <Camera className="w-5 h-5" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default icon wrapper with light mode styling.',
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    children: <Camera className="w-5 h-5" />,
    isDarkMode: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon wrapper with dark mode styling.',
      },
    },
  },
};

export const WithCustomTheme: Story = {
  args: {
    children: <Camera className="w-5 h-5" />,
    currentTheme: 'purple',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon wrapper with a custom theme applied.',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    children: <Camera className="w-5 h-5" />,
    className: 'bg-gray-100',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon wrapper with additional custom styling.',
      },
    },
  },
};