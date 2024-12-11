import type { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoProps } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A logo component that displays a branded "A" with gradient background and size variants.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the logo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    isDarkMode: {
      control: 'boolean',
      description: 'Whether to show the logo in dark mode',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<LogoProps>;

export const Default: Story = {
  args: {
    size: 'md',
    isDarkMode: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default medium-sized logo in light mode.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    isDarkMode: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'A smaller version of the logo.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    isDarkMode: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'A larger version of the logo.',
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    size: 'md',
    isDarkMode: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The logo in dark mode with inverted colors.',
      },
    },
  },
};