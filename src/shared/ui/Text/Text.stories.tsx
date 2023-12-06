import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'title lorem',
    text: 'text lorem',
  },
};

export const Error: Story = {
  args: {
    title: 'title lorem',
    text: 'text lorem',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'title lorem',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'text lorem',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'title lorem',
    text: 'text lorem',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
  args: {
    title: 'title lorem',
  },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
  args: {
    text: 'text lorem',
  },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
