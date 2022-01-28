import React, { createContext, useContext, useMemo } from 'react';
import { create, RnColorScheme, TailwindFn, useAppColorScheme, useDeviceContext } from 'twrnc';

const tw = create(require('../../tailwind.config'));

export interface TailwindContext {
  twStyle: TailwindFn['style'];
  toggleColorScheme: () => void;
  setColorSchemeApp: TailwindFn['setColorScheme'];
  colorTwScheme: RnColorScheme;
  twColor: (clx: string, clsKey?: ColorStyleKey) => any;
  tw: TailwindFn;
  twGradients: (color1: string, color2: string, color3: string) => string[];
}

const Context = createContext<TailwindContext>({} as any);

export type TailwindProviderProps = {};

export const TailwindProvider: React.FunctionComponent<TailwindProviderProps> = ({ children }) => {
  const twStyle = tw.style;
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const useTailwindStyles = (fn: (tw: TailwindFn) => any, deps: any[]) => {
    return useMemo(() => {
      const obj = fn(tw);
      return obj;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
  };

  const [colorTwScheme, toggleColorScheme, setColorSchemeApp] = useAppColorScheme(tw);
  const twColor = (clx: string, clsKey?: ColorStyleKey) => {
    const cls = clx && (tw`${clx}` as any);
    const getColorKey = (clx.includes('bg-') && 'backgroundColor') || (clx.includes('-') && 'color');
    if (!getColorKey) {
      console.warn('invalid color or bg-color');
    }
    return cls?.[clsKey || getColorKey || ''] || '';
  };

  const twGradients = (color1: string, color2: string, color3: string) => {
    if (color1 && color2 && color3) {
      return [tw.color(color1), tw.color(color2), tw.color(color3)];
    }
    return [tw.color(`bg-gray-300`), tw.color(`bg-gray-400`), tw.color(`bg-gray-500`)];
  };

  // Memoize the context value to skip rerenders
  const value = useMemo(
    () => ({
      twStyle,
      setColorSchemeApp,
      toggleColorScheme,
      colorTwScheme,
      twColor,
      tw,
      twGradients,
      useTailwindStyles,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [twStyle, colorTwScheme, toggleColorScheme, setColorSchemeApp, twColor, twGradients, useTailwindStyles, tw]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(Context);
  return ctx;
};
