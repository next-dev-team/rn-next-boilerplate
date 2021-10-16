import tokens from '@shopify/polaris-tokens';
import { px, pxToNum } from 'utils/dimension';

/**
 * spacing-none	0
spacing-extra-tight	4px
spacing-tight	8px
spacing-base-tight	12px
spacing-base	16px
spacing-loose	20px
spacing-extra-loose	32px
 */
export const spacingTheme = {
  none: tokens.spacingNone,
  xxs: pxToNum(tokens.spacingExtraTight),
  xs: pxToNum(tokens.spacingTight),
  s: pxToNum(tokens.spacingBaseTight),
  m: pxToNum(tokens.spacingBase),
  l: pxToNum(tokens.spacingLoose),
  xl: pxToNum(tokens.spacingExtraLoose),
  xxl: px(2) * pxToNum(tokens.spacingExtraLoose),
  x30: px(30),
  x40: px(40),
  x50: px(50),
  x60: px(60),
  x100: px(100),
  x200: px(200),
};

export type SpacingTheme = keyof typeof spacingTheme;
