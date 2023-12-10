import type { Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList): Decorator =>
  // eslint-disable-next-line react/display-name
  (StoryComponent) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
