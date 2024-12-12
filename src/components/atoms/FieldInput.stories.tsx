// src/components/atoms/FieldInput.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import FieldInput, { FieldInputProps } from './FieldInput';
import { Search } from 'lucide-react'; // Example icon

export default {
  title: 'Atoms/FieldInput',
  component: FieldInput,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    isFocused: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isDarkMode: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    type: { control: { type: 'select', options: ['text', 'password', 'email'] } },
    icon: { control: 'boolean' },
  },
} as Meta;

const Template: Story<FieldInputProps> = (args) => (
  <FieldInput {...args} icon={args.icon ? Search : undefined} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
  value: '',
  isFocused: false,
  isDisabled: false,
  hasError: false,
  isDarkMode: false,
  isRequired: false,
  size: 'medium',
  type: 'text',
  icon: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  hasError: true,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  ...Default.args,
  isDarkMode: true,
};