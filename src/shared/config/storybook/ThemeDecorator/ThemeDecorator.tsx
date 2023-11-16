import type { Decorator } from '@storybook/react';
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  // eslint-disable-next-line react/display-name
  (StoryComponent) =>
    (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>{<StoryComponent />}</div>
      </ThemeProvider>
    );
