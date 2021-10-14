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
export const borderRadii = {
  s: px(pxToNum(tokens.spacingBaseTight)),
  m: px(pxToNum(tokens.spacingBase)),
  l: px(pxToNum(tokens.spacingLoose)),
  xl: px(pxToNum(tokens.spacingExtraLoose)),
  full: 300,
};
