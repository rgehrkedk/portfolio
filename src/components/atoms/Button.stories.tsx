import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { themes } from '@/theme/themes';
import { Camera, Search, Home } from 'lucide-react'; // Import Lucide icons

const icons = {
  Camera: <Camera />,
  Search: <Search />,
  Home: <Home />,
};

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  // Add tags for autodocs
  tags: ['autodocs'],
  // Add component description
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component that supports different variants, sizes, and themes.',
      },
    },
  },
  // Add default args
  args: {
    children: 'Button',
  },
  // Add control types and descriptions
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
      description: 'The visual style of the button',
      table: {
        defaultValue: { summary: 'solid' },
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
    },
    theme: {
      control: 'select',
      options: Object.keys(themes),
      description: 'The color theme of the button',
      table: {
        defaultValue: { summary: 'blue' },
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
      control: 'text',
      description: 'The content to display inside the button',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
      description: 'Icon to display inside the button',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      mapping: icons,
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid Button',
    icon: 'Camera', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'The default solid variant with a filled background.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
    icon: 'Search', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'An outlined variant with a transparent background.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
    icon: 'Home', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'A minimal variant with no background or border.',
      },
    },
  },
};

// Theme Examples
export const BlueSolid: Story = {
  args: {
    theme: 'blue',
    variant: 'solid',
    children: 'Blue Theme',
    icon: 'Camera', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'The default blue theme.',
      },
    },
  },
};

export const PurpleSolid: Story = {
  args: {
    theme: 'purple',
    variant: 'solid',
    children: 'Purple Theme',
    icon: 'Search', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'Alternative purple theme.',
      },
    },
  },
};

export const TealSolid: Story = {
  args: {
    theme: 'teal',
    variant: 'solid',
    children: 'Teal Theme',
    icon: 'Home', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'Alternative teal theme.',
      },
    },
  },
};

// Size Examples
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
    icon: 'Camera', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'A smaller button variant.',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
    icon: 'Search', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'The default medium-sized button.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
    icon: 'Home', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'A larger button variant.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
    icon: 'Camera', // Default icon
  },
  parameters: {
    docs: {
      description: {
        story: 'The disabled state of the button.',
      },
    },
  },
};
