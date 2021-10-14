import { TextStyle, ViewStyle } from 'react-native';
import { ColorsTheme } from './colors';
import { SpacingTheme } from './spacing';

type BaseResponsive = {
  phone?: SpacingTheme;
  tablet?: SpacingTheme;
};

type RestStyle = Omit<ViewStyle, 'padding' | 'color' | 'margin'> &
  Omit<TextStyle, 'padding' | 'color' | 'margin'> & {
    color?: ColorsTheme;
    padding?: BaseResponsive;
    margin?: BaseResponsive;
    [key: string]: any;
  };

type CreateStyle = {
  [key: string]: RestStyle;
};

export function createStyle<T extends CreateStyle>(obj: T) {
  return obj;
}
