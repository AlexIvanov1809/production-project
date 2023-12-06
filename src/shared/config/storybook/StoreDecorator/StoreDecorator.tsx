import type { DeepPartial } from '@reduxjs/toolkit';
import type { Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  // eslint-disable-next-line react/display-name
  (StoryComponent) =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
