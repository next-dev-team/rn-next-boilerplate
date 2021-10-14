const basePalette = {
  // Basic color
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  // functional color
  func50: '#FBF5F5',
  func100: '#FFF7E3',
  func200: '#FFD21D',
  func300: '#52C41A',
  func400: '#1890FF',
  func500: '#F86E21',
  func600: '#F4333C',
};

/** Default palette */
const palette = {
  ...basePalette,
  // main color
  primary50: '#E5F1FF',
  primary100: '#3AA3FF',
  primary200: '#005DFF',
  primary300: 'rgba(0, 93, 255, 0.7)',
  primary400: 'rgba(0, 93, 255, 0.4)',
  // neutral colors
  gray50: '#F5F5F5',
  gray100: '#E5E5E5',
  gray200: '#CCCCCC',
  gray300: '#999999',
  gray400: '#666666',
  gray500: '#333333',
  gray600: 'rgba(0, 0, 0, 0.4)',
  gray700: 'rgba(0, 0, 0, 0.04)',
};

/** Dark palette */
export const darkPalette = {
  ...basePalette,
  // main color
  primary50: 'rgba(0, 93, 255, 0.3)',
  primary100: '#3AA3FF',
  primary200: '#005DFF',
  primary300: 'rgba(0, 93, 255, 0.7)',
  primary400: 'rgba(0, 93, 255, 0.4)',

  // neutral colors
  gray50: '#131C22',
  gray100: 'rgba(255, 255, 255, 0.15)',
  gray200: 'rgba(255, 255, 255, 0.25)',
  gray300: 'rgba(255, 255, 255, 0.4)',
  gray400: 'rgba(255, 255, 255, 0.6)',
  gray500: 'rgba(255, 255, 255, 0.8)',
  gray600: 'rgba(0, 0, 0, 0.4)',
  gray700: 'rgba(0, 0, 0, 0.04)',
};

export const lightPalette = {
  ...palette,
  background: palette.gray50,
  mask: palette.gray600,
  border: palette.gray200,
  icon: palette.gray300,
  disabled: palette.gray200,
  primary_disabled: palette.primary300,
  text: palette.gray500,
  text_active: palette.white,
};

export type ColorsTheme = keyof typeof lightPalette;
