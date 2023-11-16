import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos fuga repellat inventore ducimus eum quod aliquid minus aperiam, cum nihil aliquam reprehenderit odio natus dolorum doloribus molestiae numquam esse!',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos fuga repellat inventore ducimus eum quod aliquid minus aperiam, cum nihil aliquam reprehenderit odio natus dolorum doloribus molestiae numquam esse!',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
