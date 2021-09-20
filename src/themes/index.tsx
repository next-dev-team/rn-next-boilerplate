import tokens from '@shopify/polaris-tokens';
import { createTheme } from '@shopify/restyle';

// https://github.com/Shopify/polaris-react/blob/main/documentation/Color%20system.md
// https://shopify.github.io/polaris-tokens/

const spacingExtraTight = 4;
const spacingTight = 8;
const spacingBaseTight = 12;
const spacingBase = 16;
const spacingLoose = 20;
const spacingExtraLoose = 32;

export const spacingSize = {
  none: tokens.spacingNone,
  xxs: spacingExtraTight,
  xs: spacingTight,
  s: spacingBaseTight,
  m: spacingBase,
  l: spacingLoose,
  xl: spacingExtraLoose,
  xxl: 2 * spacingExtraLoose,
  '40': 40,
  '50': 50,
  '100': 100,
};

export const colorsTheme = {
  body: tokens.colorBlack,
  bgRegular: tokens.colorWhite,
  bgSubdued: tokens.colorSkyLighter,
  // --- fg is foreground color -------
  fgRegular: tokens.colorBlack,
  fgOff: tokens.colorInkLight,
  fgSubdued: tokens.colorInkLightest,
  fgContrasting: tokens.colorWhite,
  fgSuccess: tokens.colorGreenDark,

  // --- hl is hight light color -------
  hlPrimary: tokens.colorIndigo,
  hlPrimaryDisabled: tokens.colorIndigoLight,

  buttonBgPlain: tokens.colorSky,
  errorPrimary: tokens.colorRed,
  iconBgDark: tokens.colorBlueDarker,
};

const lightTheme = createTheme({
  spacing: spacingSize,
  colors: colorsTheme,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    s: spacingBaseTight,
    m: spacingBase,
    l: spacingLoose,
    xl: spacingExtraLoose,
  },
  cardVariants: {
    regular: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5,
    },
  },
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'fgSubdued',
    },
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'fgSubdued',
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'fgSubdued',
    },
  },
});

export type AppTheme = typeof lightTheme;

const darkTheme: AppTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    //add dark mode color here
  },
};

export { darkTheme, lightTheme };
