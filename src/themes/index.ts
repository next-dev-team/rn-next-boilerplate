import { createTheme } from '@shopify/restyle';
import { borderRadii } from './borderRadii';
import { breakpoints } from './breakpoints';
import { cardVariants } from './cardVariants';
import { darkPalette, lightPalette } from './colors';
import { spacingTheme } from './spacing';
import { textVariants } from './textVariants';
import { zIndices } from './zIndices';

// https://github.com/Shopify/polaris-react/blob/main/documentation/Color%20system.md
// https://shopify.github.io/polaris-tokens/

const lightTheme = createTheme({
  spacing: spacingTheme,
  colors: lightPalette,
  breakpoints,
  borderRadii,
  cardVariants,
  textVariants,
  zIndices,
});

export type AppTheme = typeof lightTheme;

const darkTheme: AppTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...darkPalette,
  },
};

export { darkTheme, lightTheme, spacingTheme };
