import { createState, useState } from '@hookstate/core';
import { tw } from 'utils';

type IInitStore = {
  colorScheme: 'dark' | 'light' | 'system';
};

const initStore = {
  colorScheme: 'light' as IInitStore['colorScheme'],
  counter: 1,
};

const store = createState(initStore);

export function useSettingsStore() {
  /**
   * with hookstate
   */
  const state = useState(store);

  const setColorScheme = (colorScheme: IInitStore['colorScheme'] = 'light') => {
    tw.setColorScheme(colorScheme as any);

    const theme = {
      dark: 'dark',
      light: 'light',
      system: 'system',
    } as Record<IInitStore['colorScheme'], IInitStore['colorScheme']>;
    return state.colorScheme.set(theme?.[colorScheme]);
  };

  return {
    setCounter: (by = 1) => {
      state.counter.set(p => p + by);
    },
    counter: state.counter.get(),
    setColorScheme,
    get colorScheme() {
      return state.colorScheme.get();
    },
  } as const;
}
