import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({})];
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
