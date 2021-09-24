import tokens from '@shopify/polaris-tokens';
import { px, pxToNum } from 'utils/dimension';

export const spacingTheme = {
  none: tokens.spacingNone,
  xxs: pxToNum(tokens.spacingExtraTight),
  xs: pxToNum(tokens.spacingTight),
  s: pxToNum(tokens.spacingBaseTight),
  m: pxToNum(tokens.spacingBase),
  l: pxToNum(tokens.spacingLoose),
  xl: pxToNum(tokens.spacingExtraLoose),
  xxl: px(2) * pxToNum(tokens.spacingExtraLoose),
};

export type SpacingTheme = keyof typeof spacingTheme;
