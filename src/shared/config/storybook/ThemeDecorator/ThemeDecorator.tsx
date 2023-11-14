import type { Decorator } from '@storybook/react';
import type { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  // eslint-disable-next-line react/display-name
  (StoryComponent) =>
    <div className={`app ${theme}`}>{<StoryComponent />}</div>;
