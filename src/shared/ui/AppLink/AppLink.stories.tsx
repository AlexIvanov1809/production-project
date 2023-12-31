import type { Meta, StoryObj } from '@storybook/react';

import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  args: {
    to: '/',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Text',
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Text',
  },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
