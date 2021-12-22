import { useCreation } from 'ahooks';
import React, { createContext, useContext } from 'react';
import { TextStyle } from 'react-native';
import { create, RnColorScheme, TailwindFn, useAppColorScheme, useDeviceContext } from 'twrnc';

export const tw = create(require('../../tailwind.config'));

export interface TailwindContext {
  twStyle: TailwindFn['style'];
  toggleColorScheme: () => void;
  setColorSchemeApp: TailwindFn['setColorScheme'];
  colorTwScheme: RnColorScheme;
  twColor: (clx: string, clsKey?: keyof TextStyle, isDefaultObj?: boolean) => string;
  tw: TailwindFn;
}

const Context = createContext<TailwindContext>({} as any);

export interface TailwindProviderProps {}

export const TailwindProvider: React.FunctionComponent<TailwindProviderProps> = ({ children }) => {
  const twStyle = tw.style;
  useDeviceContext(tw, { withDeviceColorScheme: false });

  const [colorTwScheme, toggleColorScheme, setColorSchemeApp] = useAppColorScheme(tw);
  const twColor = (clx: string, clsKey: keyof TextStyle = 'color', isDefaultObj?: boolean): string => {
    const cls = twStyle(`${clx}`);
    //@ts-ignore
    return (isDefaultObj ? cls : cls?.[(clx.includes('bg') && 'backgroundColor') || clsKey]) as string;
  };

  // Memoize the context value to skip rerenders
  const value = useCreation(
    () => ({ twStyle, setColorSchemeApp, toggleColorScheme, colorTwScheme, twColor, tw }),
    [twStyle, colorTwScheme, toggleColorScheme, setColorSchemeApp, twColor, tw]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(Context);
  return ctx;
};
