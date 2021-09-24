import tokens from '@shopify/polaris-tokens';
import { px, pxToNum } from 'utils/dimension';

export const borderRadii = {
  s: px(pxToNum(tokens.spacingBaseTight)),
  m: px(pxToNum(tokens.spacingBase)),
  l: px(pxToNum(tokens.spacingLoose)),
  xl: px(pxToNum(tokens.spacingExtraLoose)),
  full: 300,
};
