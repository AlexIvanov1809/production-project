import type { Reducer } from '@reduxjs/toolkit';
import type { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import type { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { type ReactElement, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type reducersListEntries = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  children: ReactElement;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  removeAfterUnmount,
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: reducersListEntries) => {
      store.reducerManager.add(name, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: reducersListEntries) => {
            store.reducerManager.remove(name);
          },
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
};
